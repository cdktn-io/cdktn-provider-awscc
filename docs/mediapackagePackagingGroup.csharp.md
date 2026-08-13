# `mediapackagePackagingGroup` Submodule <a name="`mediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingGroup <a name="MediapackagePackagingGroup" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroup(Construct Scope, string Id, MediapackagePackagingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs">PutEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs">ResetEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization"></a>

```csharp
private void PutAuthorization(MediapackagePackagingGroupAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `PutEgressAccessLogs` <a name="PutEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs"></a>

```csharp
private void PutEgressAccessLogs(MediapackagePackagingGroupEgressAccessLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|MediapackagePackagingGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetEgressAccessLogs` <a name="ResetEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs"></a>

```csharp
private void ResetEgressAccessLogs()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediapackagePackagingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs">EgressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput">AuthorizationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput">EgressAccessLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput">PackagingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId">PackagingGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization"></a>

```csharp
public MediapackagePackagingGroupAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EgressAccessLogs`<sup>Required</sup> <a name="EgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs"></a>

```csharp
public MediapackagePackagingGroupEgressAccessLogsOutputReference EgressAccessLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags"></a>

```csharp
public MediapackagePackagingGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput"></a>

```csharp
public IResolvable|MediapackagePackagingGroupAuthorization AuthorizationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `EgressAccessLogsInput`<sup>Optional</sup> <a name="EgressAccessLogsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput"></a>

```csharp
public IResolvable|MediapackagePackagingGroupEgressAccessLogs EgressAccessLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `PackagingGroupIdInput`<sup>Optional</sup> <a name="PackagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput"></a>

```csharp
public string PackagingGroupIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput"></a>

```csharp
public IResolvable|MediapackagePackagingGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId"></a>

```csharp
public string PackagingGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingGroupAuthorization <a name="MediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupAuthorization {
    string CdnIdentifierSecret = null,
    string SecretsRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret">CdnIdentifierSecret</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager. |

---

##### `CdnIdentifierSecret`<sup>Optional</sup> <a name="CdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

```csharp
public string CdnIdentifierSecret { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

##### `SecretsRoleArn`<sup>Optional</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn"></a>

```csharp
public string SecretsRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

### MediapackagePackagingGroupConfig <a name="MediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PackagingGroupId,
    MediapackagePackagingGroupAuthorization Authorization = null,
    MediapackagePackagingGroupEgressAccessLogs EgressAccessLogs = null,
    IResolvable|MediapackagePackagingGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId">PackagingGroupId</a></code> | <code>string</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs">EgressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId"></a>

```csharp
public string PackagingGroupId { get; set; }
```

- *Type:* string

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization"></a>

```csharp
public MediapackagePackagingGroupAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `EgressAccessLogs`<sup>Optional</sup> <a name="EgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs"></a>

```csharp
public MediapackagePackagingGroupEgressAccessLogs EgressAccessLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags"></a>

```csharp
public IResolvable|MediapackagePackagingGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

### MediapackagePackagingGroupEgressAccessLogs <a name="MediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupEgressAccessLogs {
    string LogGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Sets a custom AWS CloudWatch log group name for egress logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

### MediapackagePackagingGroupTags <a name="MediapackagePackagingGroupTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingGroupAuthorizationOutputReference <a name="MediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret">ResetCdnIdentifierSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn">ResetSecretsRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdnIdentifierSecret` <a name="ResetCdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret"></a>

```csharp
private void ResetCdnIdentifierSecret()
```

##### `ResetSecretsRoleArn` <a name="ResetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn"></a>

```csharp
private void ResetSecretsRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput">CdnIdentifierSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput">SecretsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">CdnIdentifierSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CdnIdentifierSecretInput`<sup>Optional</sup> <a name="CdnIdentifierSecretInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput"></a>

```csharp
public string CdnIdentifierSecretInput { get; }
```

- *Type:* string

---

##### `SecretsRoleArnInput`<sup>Optional</sup> <a name="SecretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput"></a>

```csharp
public string SecretsRoleArnInput { get; }
```

- *Type:* string

---

##### `CdnIdentifierSecret`<sup>Required</sup> <a name="CdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```csharp
public string CdnIdentifierSecret { get; }
```

- *Type:* string

---

##### `SecretsRoleArn`<sup>Required</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```csharp
public string SecretsRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingGroupAuthorization InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---


### MediapackagePackagingGroupEgressAccessLogsOutputReference <a name="MediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupEgressAccessLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingGroupEgressAccessLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---


### MediapackagePackagingGroupTagsList <a name="MediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get"></a>

```csharp
private MediapackagePackagingGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---


### MediapackagePackagingGroupTagsOutputReference <a name="MediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>

---



