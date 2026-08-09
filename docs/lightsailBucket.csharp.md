# `lightsailBucket` Submodule <a name="`lightsailBucket` Submodule" id="@cdktn/provider-awscc.lightsailBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailBucket <a name="LightsailBucket" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket awscc_lightsail_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucket(Construct Scope, string Id, LightsailBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig">LightsailBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig">LightsailBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules">PutAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetAccessRules">ResetAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetObjectVersioning">ResetObjectVersioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetReadOnlyAccessAccounts">ResetReadOnlyAccessAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetResourcesReceivingAccess">ResetResourcesReceivingAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRules` <a name="PutAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules"></a>

```csharp
private void PutAccessRules(LightsailBucketAccessRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putAccessRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags"></a>

```csharp
private void PutTags(IResolvable|LightsailBucketTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]

---

##### `ResetAccessRules` <a name="ResetAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetAccessRules"></a>

```csharp
private void ResetAccessRules()
```

##### `ResetObjectVersioning` <a name="ResetObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetObjectVersioning"></a>

```csharp
private void ResetObjectVersioning()
```

##### `ResetReadOnlyAccessAccounts` <a name="ResetReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetReadOnlyAccessAccounts"></a>

```csharp
private void ResetReadOnlyAccessAccounts()
```

##### `ResetResourcesReceivingAccess` <a name="ResetResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetResourcesReceivingAccess"></a>

```csharp
private void ResetResourcesReceivingAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailBucket resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.ableToUpdateBundle">AbleToUpdateBundle</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference">LightsailBucketAccessRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList">LightsailBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRulesInput">AccessRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioningInput">ObjectVersioningInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccountsInput">ReadOnlyAccessAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccessInput">ResourcesReceivingAccessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioning">ObjectVersioning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccounts">ReadOnlyAccessAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccess">ResourcesReceivingAccess</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AbleToUpdateBundle`<sup>Required</sup> <a name="AbleToUpdateBundle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.ableToUpdateBundle"></a>

```csharp
public IResolvable AbleToUpdateBundle { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRules"></a>

```csharp
public LightsailBucketAccessRulesOutputReference AccessRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference">LightsailBucketAccessRulesOutputReference</a>

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tags"></a>

```csharp
public LightsailBucketTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList">LightsailBucketTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AccessRulesInput`<sup>Optional</sup> <a name="AccessRulesInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.accessRulesInput"></a>

```csharp
public IResolvable|LightsailBucketAccessRules AccessRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `ObjectVersioningInput`<sup>Optional</sup> <a name="ObjectVersioningInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioningInput"></a>

```csharp
public bool|IResolvable ObjectVersioningInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadOnlyAccessAccountsInput`<sup>Optional</sup> <a name="ReadOnlyAccessAccountsInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccountsInput"></a>

```csharp
public string[] ReadOnlyAccessAccountsInput { get; }
```

- *Type:* string[]

---

##### `ResourcesReceivingAccessInput`<sup>Optional</sup> <a name="ResourcesReceivingAccessInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccessInput"></a>

```csharp
public string[] ResourcesReceivingAccessInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tagsInput"></a>

```csharp
public IResolvable|LightsailBucketTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `ObjectVersioning`<sup>Required</sup> <a name="ObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.objectVersioning"></a>

```csharp
public bool|IResolvable ObjectVersioning { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadOnlyAccessAccounts`<sup>Required</sup> <a name="ReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.readOnlyAccessAccounts"></a>

```csharp
public string[] ReadOnlyAccessAccounts { get; }
```

- *Type:* string[]

---

##### `ResourcesReceivingAccess`<sup>Required</sup> <a name="ResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.resourcesReceivingAccess"></a>

```csharp
public string[] ResourcesReceivingAccess { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailBucketAccessRules <a name="LightsailBucketAccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketAccessRules {
    bool|IResolvable AllowPublicOverrides = null,
    string FetchObject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.allowPublicOverrides">AllowPublicOverrides</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.fetchObject">FetchObject</a></code> | <code>string</code> | Specifies the anonymous access to all objects in a bucket. |

---

##### `AllowPublicOverrides`<sup>Optional</sup> <a name="AllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.allowPublicOverrides"></a>

```csharp
public bool|IResolvable AllowPublicOverrides { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#allow_public_overrides LightsailBucket#allow_public_overrides}

---

##### `FetchObject`<sup>Optional</sup> <a name="FetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules.property.fetchObject"></a>

```csharp
public string FetchObject { get; set; }
```

- *Type:* string

Specifies the anonymous access to all objects in a bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#get_object LightsailBucket#get_object}

---

### LightsailBucketConfig <a name="LightsailBucketConfig" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BucketName,
    string BundleId,
    LightsailBucketAccessRules AccessRules = null,
    bool|IResolvable ObjectVersioning = null,
    string[] ReadOnlyAccessAccounts = null,
    string[] ResourcesReceivingAccess = null,
    IResolvable|LightsailBucketTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bucketName">BucketName</a></code> | <code>string</code> | The name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bundleId">BundleId</a></code> | <code>string</code> | The ID of the bundle to use for the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a></code> | An object that sets the public accessibility of objects in the specified bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.objectVersioning">ObjectVersioning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to enable or disable versioning of objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.readOnlyAccessAccounts">ReadOnlyAccessAccounts</a></code> | <code>string[]</code> | An array of strings to specify the AWS account IDs that can access the bucket. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.resourcesReceivingAccess">ResourcesReceivingAccess</a></code> | <code>string[]</code> | The names of the Lightsail resources for which to set bucket access. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#bucket_name LightsailBucket#bucket_name}

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

The ID of the bundle to use for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#bundle_id LightsailBucket#bundle_id}

---

##### `AccessRules`<sup>Optional</sup> <a name="AccessRules" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.accessRules"></a>

```csharp
public LightsailBucketAccessRules AccessRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

An object that sets the public accessibility of objects in the specified bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#access_rules LightsailBucket#access_rules}

---

##### `ObjectVersioning`<sup>Optional</sup> <a name="ObjectVersioning" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.objectVersioning"></a>

```csharp
public bool|IResolvable ObjectVersioning { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to enable or disable versioning of objects in the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#object_versioning LightsailBucket#object_versioning}

---

##### `ReadOnlyAccessAccounts`<sup>Optional</sup> <a name="ReadOnlyAccessAccounts" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.readOnlyAccessAccounts"></a>

```csharp
public string[] ReadOnlyAccessAccounts { get; set; }
```

- *Type:* string[]

An array of strings to specify the AWS account IDs that can access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#read_only_access_accounts LightsailBucket#read_only_access_accounts}

---

##### `ResourcesReceivingAccess`<sup>Optional</sup> <a name="ResourcesReceivingAccess" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.resourcesReceivingAccess"></a>

```csharp
public string[] ResourcesReceivingAccess { get; set; }
```

- *Type:* string[]

The names of the Lightsail resources for which to set bucket access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#resources_receiving_access LightsailBucket#resources_receiving_access}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketConfig.property.tags"></a>

```csharp
public IResolvable|LightsailBucketTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#tags LightsailBucket#tags}

---

### LightsailBucketTags <a name="LightsailBucketTags" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#key LightsailBucket#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_bucket#value LightsailBucket#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailBucketAccessRulesOutputReference <a name="LightsailBucketAccessRulesOutputReference" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketAccessRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetAllowPublicOverrides">ResetAllowPublicOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetFetchObject">ResetFetchObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowPublicOverrides` <a name="ResetAllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetAllowPublicOverrides"></a>

```csharp
private void ResetAllowPublicOverrides()
```

##### `ResetFetchObject` <a name="ResetFetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.resetFetchObject"></a>

```csharp
private void ResetFetchObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverridesInput">AllowPublicOverridesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObjectInput">FetchObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverrides">AllowPublicOverrides</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObject">FetchObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowPublicOverridesInput`<sup>Optional</sup> <a name="AllowPublicOverridesInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverridesInput"></a>

```csharp
public bool|IResolvable AllowPublicOverridesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FetchObjectInput`<sup>Optional</sup> <a name="FetchObjectInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObjectInput"></a>

```csharp
public string FetchObjectInput { get; }
```

- *Type:* string

---

##### `AllowPublicOverrides`<sup>Required</sup> <a name="AllowPublicOverrides" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.allowPublicOverrides"></a>

```csharp
public bool|IResolvable AllowPublicOverrides { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FetchObject`<sup>Required</sup> <a name="FetchObject" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.fetchObject"></a>

```csharp
public string FetchObject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailBucketAccessRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketAccessRules">LightsailBucketAccessRules</a>

---


### LightsailBucketTagsList <a name="LightsailBucketTagsList" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get"></a>

```csharp
private LightsailBucketTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailBucketTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>[]

---


### LightsailBucketTagsOutputReference <a name="LightsailBucketTagsOutputReference" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailBucketTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailBucket.LightsailBucketTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailBucketTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailBucket.LightsailBucketTags">LightsailBucketTags</a>

---



