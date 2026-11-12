# `mediaconnectSourceEndpoint` Submodule <a name="`mediaconnectSourceEndpoint` Submodule" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectSourceEndpoint <a name="MediaconnectSourceEndpoint" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint awscc_mediaconnect_source_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpoint(Construct Scope, string Id, MediaconnectSourceEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig">MediaconnectSourceEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig">MediaconnectSourceEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putConfiguration"></a>

```csharp
private void PutConfiguration(MediaconnectSourceEndpointConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|MediaconnectSourceEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetRegionName"></a>

```csharp
private void ResetRegionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectSourceEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectSourceEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectSourceEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectSourceEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectSourceEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectSourceEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectSourceEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectSourceEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.associatedResourceDetails">AssociatedResourceDetails</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference">MediaconnectSourceEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.lifecycleManagement">LifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.registrationState">RegistrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.sourceEndpointId">SourceEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList">MediaconnectSourceEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedResourceDetails`<sup>Required</sup> <a name="AssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.associatedResourceDetails"></a>

```csharp
public MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference AssociatedResourceDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference">MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.configuration"></a>

```csharp
public MediaconnectSourceEndpointConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference">MediaconnectSourceEndpointConfigurationOutputReference</a>

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.lifecycleManagement"></a>

```csharp
public string LifecycleManagement { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegistrationState`<sup>Required</sup> <a name="RegistrationState" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.registrationState"></a>

```csharp
public string RegistrationState { get; }
```

- *Type:* string

---

##### `SourceEndpointId`<sup>Required</sup> <a name="SourceEndpointId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.sourceEndpointId"></a>

```csharp
public string SourceEndpointId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tags"></a>

```csharp
public MediaconnectSourceEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList">MediaconnectSourceEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.configurationInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectSourceEndpointAssociatedResourceDetails <a name="MediaconnectSourceEndpointAssociatedResourceDetails" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointAssociatedResourceDetails {

};
```


### MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput <a name="MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput {

};
```


### MediaconnectSourceEndpointConfig <a name="MediaconnectSourceEndpointConfig" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MediaconnectSourceEndpointConfiguration Configuration,
    string Description = null,
    string RegionName = null,
    IResolvable|MediaconnectSourceEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a></code> | The configuration settings for a source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.description">Description</a></code> | <code>string</code> | The description of the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.regionName">RegionName</a></code> | <code>string</code> | The name of the Amazon Web Services Region in which the source endpoint is located. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]</code> | The tags associated with the source endpoint. Each tag is a key-value pair. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.configuration"></a>

```csharp
public MediaconnectSourceEndpointConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a>

The configuration settings for a source endpoint.

This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#configuration MediaconnectSourceEndpoint#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#description MediaconnectSourceEndpoint#description}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

The name of the Amazon Web Services Region in which the source endpoint is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#region_name MediaconnectSourceEndpoint#region_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfig.property.tags"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]

The tags associated with the source endpoint. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#tags MediaconnectSourceEndpoint#tags}

---

### MediaconnectSourceEndpointConfiguration <a name="MediaconnectSourceEndpointConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfiguration {
    MediaconnectSourceEndpointConfigurationRouterOutput RouterOutput = null,
    MediaconnectSourceEndpointConfigurationStandard Standard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration.property.routerOutput">RouterOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a></code> | The configuration settings for a source endpoint that represents a router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a></code> | The configuration settings for a standard source endpoint. |

---

##### `RouterOutput`<sup>Optional</sup> <a name="RouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration.property.routerOutput"></a>

```csharp
public MediaconnectSourceEndpointConfigurationRouterOutput RouterOutput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a>

The configuration settings for a source endpoint that represents a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output MediaconnectSourceEndpoint#router_output}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration.property.standard"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandard Standard { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a>

The configuration settings for a standard source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#standard MediaconnectSourceEndpoint#standard}

---

### MediaconnectSourceEndpointConfigurationRouterOutput <a name="MediaconnectSourceEndpointConfigurationRouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationRouterOutput {
    string RouterOutputArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput.property.routerOutputArn">RouterOutputArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the router output that the source endpoint represents. |

---

##### `RouterOutputArn`<sup>Optional</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput.property.routerOutputArn"></a>

```csharp
public string RouterOutputArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the router output that the source endpoint represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#router_output_arn MediaconnectSourceEndpoint#router_output_arn}

---

### MediaconnectSourceEndpointConfigurationStandard <a name="MediaconnectSourceEndpointConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandard {
    string Name = null,
    string Protocol = null,
    MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration ProtocolConfiguration = null,
    MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration SourceNetworkingConfiguration = null,
    string SourceNetworkingType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.name">Name</a></code> | <code>string</code> | The name of the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol MediaconnectSourceEndpoint#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration for a standard source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.sourceNetworkingConfiguration">SourceNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a></code> | The networking configuration for a standard source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.sourceNetworkingType">SourceNetworkingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_type MediaconnectSourceEndpoint#source_networking_type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#name MediaconnectSourceEndpoint#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol MediaconnectSourceEndpoint#protocol}.

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.protocolConfiguration"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration ProtocolConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

The protocol configuration for a standard source endpoint.

This is a union type, so exactly one of its members is set, depending on the protocol that the source endpoint uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#protocol_configuration MediaconnectSourceEndpoint#protocol_configuration}

---

##### `SourceNetworkingConfiguration`<sup>Optional</sup> <a name="SourceNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.sourceNetworkingConfiguration"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration SourceNetworkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

The networking configuration for a standard source endpoint.

This is a union type, so exactly one of its members is set: public for a publicly accessible endpoint, or vpc for an endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_configuration MediaconnectSourceEndpoint#source_networking_configuration}

---

##### `SourceNetworkingType`<sup>Optional</sup> <a name="SourceNetworkingType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard.property.sourceNetworkingType"></a>

```csharp
public string SourceNetworkingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_networking_type MediaconnectSourceEndpoint#source_networking_type}.

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration {
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist Rist = null,
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp Rtp = null,
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCaller = null,
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListener = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a source endpoint that uses the RIST protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a source endpoint that uses the RTP protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a source endpoint that uses SRT in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a source endpoint that uses SRT in listener mode. |

---

##### `Rist`<sup>Optional</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.rist"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist Rist { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a source endpoint that uses the RIST protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rist MediaconnectSourceEndpoint#rist}

---

##### `Rtp`<sup>Optional</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.rtp"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp Rtp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a source endpoint that uses the RTP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#rtp MediaconnectSourceEndpoint#rtp}

---

##### `SrtCaller`<sup>Optional</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCaller { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a source endpoint that uses SRT in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_caller MediaconnectSourceEndpoint#srt_caller}

---

##### `SrtListener`<sup>Optional</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListener { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a source endpoint that uses SRT in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#srt_listener MediaconnectSourceEndpoint#srt_listener}

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist {
    double DestinationIngestPort = null,
    double RecoveryLatencyMilliseconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on the destination that receives the content. The valid range is 3000 to 30000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>double</code> | The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets. |

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on the destination that receives the content. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}

---

##### `RecoveryLatencyMilliseconds`<sup>Optional</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist.property.recoveryLatencyMilliseconds"></a>

```csharp
public double RecoveryLatencyMilliseconds { get; set; }
```

- *Type:* double

The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets.

The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#recovery_latency_milliseconds MediaconnectSourceEndpoint#recovery_latency_milliseconds}

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp {
    double DestinationIngestPort = null,
    string ForwardErrorCorrectionState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on the destination that receives the content. The valid range is 3000 to 30000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#forward_error_correction_state MediaconnectSourceEndpoint#forward_error_correction_state}. |

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on the destination that receives the content. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}

---

##### `ForwardErrorCorrectionState`<sup>Optional</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrectionState"></a>

```csharp
public string ForwardErrorCorrectionState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#forward_error_correction_state MediaconnectSourceEndpoint#forward_error_correction_state}.

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller {
    double DestinationIngestPort = null,
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphrase = null,
    double MinimumLatencyMilliseconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | The port on which the destination listens for the connection. The valid range is 3000 to 30000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |

---

##### `DestinationIngestPort`<sup>Optional</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; set; }
```

- *Type:* double

The port on which the destination listens for the connection. The valid range is 3000 to 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#destination_ingest_port MediaconnectSourceEndpoint#destination_ingest_port}

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionPassphrase"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphrase { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase MediaconnectSourceEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; set; }
```

- *Type:* double

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds MediaconnectSourceEndpoint#minimum_latency_milliseconds}

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn MediaconnectSourceEndpoint#secret_arn}

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener {
    MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphrase = null,
    double MinimumLatencyMilliseconds = null,
    string SourceAddress = null,
    double SourceListenerPort = null,
    string StreamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | The IP address that the source endpoint listens on for incoming connections. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId">StreamId</a></code> | <code>string</code> | The stream ID that identifies the content for the SRT connection. |

---

##### `EncryptionPassphrase`<sup>Optional</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.encryptionPassphrase"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphrase { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#encryption_passphrase MediaconnectSourceEndpoint#encryption_passphrase}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; set; }
```

- *Type:* double

The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#minimum_latency_milliseconds MediaconnectSourceEndpoint#minimum_latency_milliseconds}

---

##### `SourceAddress`<sup>Optional</sup> <a name="SourceAddress" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; set; }
```

- *Type:* string

The IP address that the source endpoint listens on for incoming connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_address MediaconnectSourceEndpoint#source_address}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; set; }
```

- *Type:* double

The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_listener_port MediaconnectSourceEndpoint#source_listener_port}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

The stream ID that identifies the content for the SRT connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#stream_id MediaconnectSourceEndpoint#stream_id}

---

### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret that holds the key or passphrase. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the Secrets Manager secret that holds the key or passphrase.

The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key aws/secretsmanager. The secret must be in the same Amazon Web Services account and Region as the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#secret_arn MediaconnectSourceEndpoint#secret_arn}

---

### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration {
    MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic Public = null,
    MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a></code> | The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a></code> | The networking configuration for a source endpoint in a virtual private cloud (VPC). |

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.property.public"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic Public { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#public MediaconnectSourceEndpoint#public}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration.property.vpc"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

The networking configuration for a source endpoint in a virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#vpc MediaconnectSourceEndpoint#vpc}

---

### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic {
    IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] SourceAllowRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic.property.sourceAllowRules">SourceAllowRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]</code> | The rules that specify which CIDR blocks can connect to the source endpoint. |

---

##### `SourceAllowRules`<sup>Optional</sup> <a name="SourceAllowRules" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic.property.sourceAllowRules"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] SourceAllowRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]

The rules that specify which CIDR blocks can connect to the source endpoint.

You can specify up to 10 rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#source_allow_rules MediaconnectSourceEndpoint#source_allow_rules}

---

### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules {
    string Cidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules.property.cidr">Cidr</a></code> | <code>string</code> | The CIDR block that is allowed to connect to the source endpoint, in CIDR notation. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The CIDR block that is allowed to connect to the source endpoint, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#cidr MediaconnectSourceEndpoint#cidr}

---

### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc {
    string[] SecurityGroupIds = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups to associate with the source endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet to use for the source endpoint. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The IDs of the security groups to associate with the source endpoint.

You can specify from 1 to 5 security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#security_group_ids MediaconnectSourceEndpoint#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet to use for the source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#subnet_id MediaconnectSourceEndpoint#subnet_id}

---

### MediaconnectSourceEndpointTags <a name="MediaconnectSourceEndpointTags" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#key MediaconnectSourceEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#value MediaconnectSourceEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#key MediaconnectSourceEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mediaconnect_source_endpoint#value MediaconnectSourceEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference <a name="MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput">RouterOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard">Standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetails">MediaconnectSourceEndpointAssociatedResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutput`<sup>Required</sup> <a name="RouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.routerOutput"></a>

```csharp
public MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference RouterOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference">MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.standard"></a>

```csharp
public string Standard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsOutputReference.property.internalValue"></a>

```csharp
public MediaconnectSourceEndpointAssociatedResourceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetails">MediaconnectSourceEndpointAssociatedResourceDetails</a>

---


### MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference <a name="MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate">MaximumBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.maximumBitrate"></a>

```csharp
public double MaximumBitrate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutputOutputReference.property.internalValue"></a>

```csharp
public MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput">MediaconnectSourceEndpointAssociatedResourceDetailsRouterOutput</a>

---


### MediaconnectSourceEndpointConfigurationOutputReference <a name="MediaconnectSourceEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putRouterOutput">PutRouterOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putStandard">PutStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resetRouterOutput">ResetRouterOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouterOutput` <a name="PutRouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putRouterOutput"></a>

```csharp
private void PutRouterOutput(MediaconnectSourceEndpointConfigurationRouterOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putRouterOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a>

---

##### `PutStandard` <a name="PutStandard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putStandard"></a>

```csharp
private void PutStandard(MediaconnectSourceEndpointConfigurationStandard Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a>

---

##### `ResetRouterOutput` <a name="ResetRouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resetRouterOutput"></a>

```csharp
private void ResetRouterOutput()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.resetStandard"></a>

```csharp
private void ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput">RouterOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference">MediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference">MediaconnectSourceEndpointConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.routerOutputInput">RouterOutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.standardInput">StandardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutput`<sup>Required</sup> <a name="RouterOutput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.routerOutput"></a>

```csharp
public MediaconnectSourceEndpointConfigurationRouterOutputOutputReference RouterOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference">MediaconnectSourceEndpointConfigurationRouterOutputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.standard"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardOutputReference Standard { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference">MediaconnectSourceEndpointConfigurationStandardOutputReference</a>

---

##### `RouterOutputInput`<sup>Optional</sup> <a name="RouterOutputInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.routerOutputInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationRouterOutput RouterOutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a>

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.standardInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandard StandardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfiguration">MediaconnectSourceEndpointConfiguration</a>

---


### MediaconnectSourceEndpointConfigurationRouterOutputOutputReference <a name="MediaconnectSourceEndpointConfigurationRouterOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationRouterOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resetRouterOutputArn">ResetRouterOutputArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRouterOutputArn` <a name="ResetRouterOutputArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.resetRouterOutputArn"></a>

```csharp
private void ResetRouterOutputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArnInput">RouterOutputArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn">RouterOutputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouterOutputArnInput`<sup>Optional</sup> <a name="RouterOutputArnInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArnInput"></a>

```csharp
public string RouterOutputArnInput { get; }
```

- *Type:* string

---

##### `RouterOutputArn`<sup>Required</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.routerOutputArn"></a>

```csharp
public string RouterOutputArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationRouterOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationRouterOutput">MediaconnectSourceEndpointConfigurationRouterOutput</a>

---


### MediaconnectSourceEndpointConfigurationStandardOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putProtocolConfiguration">PutProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putSourceNetworkingConfiguration">PutSourceNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetSourceNetworkingConfiguration">ResetSourceNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetSourceNetworkingType">ResetSourceNetworkingType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtocolConfiguration` <a name="PutProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```csharp
private void PutProtocolConfiguration(MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `PutSourceNetworkingConfiguration` <a name="PutSourceNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putSourceNetworkingConfiguration"></a>

```csharp
private void PutSourceNetworkingConfiguration(MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.putSourceNetworkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```csharp
private void ResetProtocolConfiguration()
```

##### `ResetSourceNetworkingConfiguration` <a name="ResetSourceNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetSourceNetworkingConfiguration"></a>

```csharp
private void ResetSourceNetworkingConfiguration()
```

##### `ResetSourceNetworkingType` <a name="ResetSourceNetworkingType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.resetSourceNetworkingType"></a>

```csharp
private void ResetSourceNetworkingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration">SourceNetworkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfigurationInput">SourceNetworkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingTypeInput">SourceNetworkingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType">SourceNetworkingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference ProtocolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `SourceNetworkingConfiguration`<sup>Required</sup> <a name="SourceNetworkingConfiguration" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfiguration"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference SourceNetworkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration ProtocolConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceNetworkingConfigurationInput`<sup>Optional</sup> <a name="SourceNetworkingConfigurationInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingConfigurationInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration SourceNetworkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

---

##### `SourceNetworkingTypeInput`<sup>Optional</sup> <a name="SourceNetworkingTypeInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingTypeInput"></a>

```csharp
public string SourceNetworkingTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceNetworkingType`<sup>Required</sup> <a name="SourceNetworkingType" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.sourceNetworkingType"></a>

```csharp
public string SourceNetworkingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandard InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandard">MediaconnectSourceEndpointConfigurationStandard</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist">PutRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp">PutRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">PutSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">PutSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist">ResetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp">ResetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">ResetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">ResetSrtListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRist` <a name="PutRist" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```csharp
private void PutRist(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `PutRtp` <a name="PutRtp" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```csharp
private void PutRtp(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `PutSrtCaller` <a name="PutSrtCaller" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```csharp
private void PutSrtCaller(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `PutSrtListener` <a name="PutSrtListener" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```csharp
private void PutSrtListener(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `ResetRist` <a name="ResetRist" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```csharp
private void ResetRist()
```

##### `ResetRtp` <a name="ResetRtp" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```csharp
private void ResetRtp()
```

##### `ResetSrtCaller` <a name="ResetSrtCaller" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```csharp
private void ResetSrtCaller()
```

##### `ResetSrtListener` <a name="ResetSrtListener" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```csharp
private void ResetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">RistInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">RtpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">SrtCallerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">SrtListenerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference Rist { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference Rtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference SrtCaller { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference SrtListener { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `RistInput`<sup>Optional</sup> <a name="RistInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist RistInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

---

##### `RtpInput`<sup>Optional</sup> <a name="RtpInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp RtpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

---

##### `SrtCallerInput`<sup>Optional</sup> <a name="SrtCallerInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller SrtCallerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `SrtListenerInput`<sup>Optional</sup> <a name="SrtListenerInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener SrtListenerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration">MediaconnectSourceEndpointConfigurationStandardProtocolConfiguration</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetRecoveryLatencyMilliseconds">ResetRecoveryLatencyMilliseconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```

##### `ResetRecoveryLatencyMilliseconds` <a name="ResetRecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.resetRecoveryLatencyMilliseconds"></a>

```csharp
private void ResetRecoveryLatencyMilliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMillisecondsInput">RecoveryLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `RecoveryLatencyMillisecondsInput`<sup>Optional</sup> <a name="RecoveryLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMillisecondsInput"></a>

```csharp
public double RecoveryLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `RecoveryLatencyMilliseconds`<sup>Required</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```csharp
public double RecoveryLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRist</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState">ResetForwardErrorCorrectionState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```

##### `ResetForwardErrorCorrectionState` <a name="ResetForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrectionState"></a>

```csharp
private void ResetForwardErrorCorrectionState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput">ForwardErrorCorrectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState">ForwardErrorCorrectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrectionStateInput`<sup>Optional</sup> <a name="ForwardErrorCorrectionStateInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionStateInput"></a>

```csharp
public string ForwardErrorCorrectionStateInput { get; }
```

- *Type:* string

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `ForwardErrorCorrectionState`<sup>Required</sup> <a name="ForwardErrorCorrectionState" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionState"></a>

```csharp
public string ForwardErrorCorrectionState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationRtp</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationIngestPort">ResetDestinationIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase"></a>

```csharp
private void PutEncryptionPassphrase(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `ResetDestinationIngestPort` <a name="ResetDestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationIngestPort"></a>

```csharp
private void ResetDestinationIngestPort()
```

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionPassphrase"></a>

```csharp
private void ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```csharp
private void ResetMinimumLatencyMilliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPortInput">DestinationIngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort">DestinationIngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphrase"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphraseOutputReference</a>

---

##### `DestinationIngestPortInput`<sup>Optional</sup> <a name="DestinationIngestPortInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPortInput"></a>

```csharp
public double DestinationIngestPortInput { get; }
```

- *Type:* double

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionPassphraseInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase EncryptionPassphraseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerEncryptionPassphrase</a>

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```csharp
public double MinimumLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `DestinationIngestPort`<sup>Required</sup> <a name="DestinationIngestPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationIngestPort"></a>

```csharp
public double DestinationIngestPort { get; }
```

- *Type:* double

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---


### MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase">PutEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase">ResetEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetSourceAddress">ResetSourceAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionPassphrase` <a name="PutEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase"></a>

```csharp
private void PutEncryptionPassphrase(MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionPassphrase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `ResetEncryptionPassphrase` <a name="ResetEncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionPassphrase"></a>

```csharp
private void ResetEncryptionPassphrase()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```csharp
private void ResetMinimumLatencyMilliseconds()
```

##### `ResetSourceAddress` <a name="ResetSourceAddress" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetSourceAddress"></a>

```csharp
private void ResetSourceAddress()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetSourceListenerPort"></a>

```csharp
private void ResetSourceListenerPort()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase">EncryptionPassphrase</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput">EncryptionPassphraseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddressInput">SourceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionPassphrase`<sup>Required</sup> <a name="EncryptionPassphrase" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphrase"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference EncryptionPassphrase { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphraseOutputReference</a>

---

##### `EncryptionPassphraseInput`<sup>Optional</sup> <a name="EncryptionPassphraseInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionPassphraseInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase EncryptionPassphraseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerEncryptionPassphrase</a>

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```csharp
public double MinimumLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `SourceAddressInput`<sup>Optional</sup> <a name="SourceAddressInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddressInput"></a>

```csharp
public string SourceAddressInput { get; }
```

- *Type:* string

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPortInput"></a>

```csharp
public double SourceListenerPortInput { get; }
```

- *Type:* double

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```csharp
public double MinimumLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; }
```

- *Type:* string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener">MediaconnectSourceEndpointConfigurationStandardProtocolConfigurationSrtListener</a>

---


### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putPublic">PutPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublic` <a name="PutPublic" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putPublic"></a>

```csharp
private void PutPublic(MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putPublic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putVpc"></a>

```csharp
private void PutVpc(MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

---

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resetPublic"></a>

```csharp
private void ResetPublic()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.resetVpc"></a>

```csharp
private void ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.publicInput">PublicInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.public"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference Public { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpc"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference</a>

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.publicInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic PublicInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.vpcInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfiguration</a>

---


### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.putSourceAllowRules">PutSourceAllowRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resetSourceAllowRules">ResetSourceAllowRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceAllowRules` <a name="PutSourceAllowRules" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.putSourceAllowRules"></a>

```csharp
private void PutSourceAllowRules(IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.putSourceAllowRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]

---

##### `ResetSourceAllowRules` <a name="ResetSourceAllowRules" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.resetSourceAllowRules"></a>

```csharp
private void ResetSourceAllowRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules">SourceAllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRulesInput">SourceAllowRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceAllowRules`<sup>Required</sup> <a name="SourceAllowRules" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRules"></a>

```csharp
public MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList SourceAllowRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList</a>

---

##### `SourceAllowRulesInput`<sup>Optional</sup> <a name="SourceAllowRulesInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.sourceAllowRulesInput"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] SourceAllowRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublic</a>

---


### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get"></a>

```csharp
private MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>[]

---


### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationPublicSourceAllowRules</a>

---


### MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference <a name="MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc">MediaconnectSourceEndpointConfigurationStandardSourceNetworkingConfigurationVpc</a>

---


### MediaconnectSourceEndpointTagsList <a name="MediaconnectSourceEndpointTagsList" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.get"></a>

```csharp
private MediaconnectSourceEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>[]

---


### MediaconnectSourceEndpointTagsOutputReference <a name="MediaconnectSourceEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectSourceEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectSourceEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectSourceEndpoint.MediaconnectSourceEndpointTags">MediaconnectSourceEndpointTags</a>

---



