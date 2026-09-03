# `mediapackagev2OriginEndpointPolicy` Submodule <a name="`mediapackagev2OriginEndpointPolicy` Submodule" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2OriginEndpointPolicy <a name="Mediapackagev2OriginEndpointPolicy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2OriginEndpointPolicy(Construct Scope, string Id, Mediapackagev2OriginEndpointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig">Mediapackagev2OriginEndpointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig">Mediapackagev2OriginEndpointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration">PutCdnAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration">ResetCdnAuthConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCdnAuthConfiguration` <a name="PutCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration"></a>

```csharp
private void PutCdnAuthConfiguration(Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.putCdnAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---

##### `ResetCdnAuthConfiguration` <a name="ResetCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.resetCdnAuthConfiguration"></a>

```csharp
private void ResetCdnAuthConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2OriginEndpointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2OriginEndpointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2OriginEndpointPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2OriginEndpointPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Mediapackagev2OriginEndpointPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Mediapackagev2OriginEndpointPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Mediapackagev2OriginEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2OriginEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration">CdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput">CdnAuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput">ChannelGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput">OriginEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName">OriginEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CdnAuthConfiguration`<sup>Required</sup> <a name="CdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfiguration"></a>

```csharp
public Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference CdnAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference">Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CdnAuthConfigurationInput`<sup>Optional</sup> <a name="CdnAuthConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.cdnAuthConfigurationInput"></a>

```csharp
public IResolvable|Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration CdnAuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---

##### `ChannelGroupNameInput`<sup>Optional</sup> <a name="ChannelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupNameInput"></a>

```csharp
public string ChannelGroupNameInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `OriginEndpointNameInput`<sup>Optional</sup> <a name="OriginEndpointNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointNameInput"></a>

```csharp
public string OriginEndpointNameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.originEndpointName"></a>

```csharp
public string OriginEndpointName { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration {
    string[] CdnIdentifierSecretArns = null,
    string SecretsRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns">CdnIdentifierSecretArns</a></code> | <code>string[]</code> | <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>string</code> | <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>. |

---

##### `CdnIdentifierSecretArns`<sup>Optional</sup> <a name="CdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.cdnIdentifierSecretArns"></a>

```csharp
public string[] CdnIdentifierSecretArns { get; set; }
```

- *Type:* string[]

<p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_identifier_secret_arns Mediapackagev2OriginEndpointPolicy#cdn_identifier_secret_arns}

---

##### `SecretsRoleArn`<sup>Optional</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration.property.secretsRoleArn"></a>

```csharp
public string SecretsRoleArn { get; set; }
```

- *Type:* string

<p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#secrets_role_arn Mediapackagev2OriginEndpointPolicy#secrets_role_arn}

---

### Mediapackagev2OriginEndpointPolicyConfig <a name="Mediapackagev2OriginEndpointPolicyConfig" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2OriginEndpointPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelGroupName,
    string ChannelName,
    string OriginEndpointName,
    string Policy,
    Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration CdnAuthConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName">OriginEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration">CdnAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | <p>The settings to enable CDN authorization headers in MediaPackage.</p>. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name Mediapackagev2OriginEndpointPolicy#channel_group_name}.

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name Mediapackagev2OriginEndpointPolicy#channel_name}.

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.originEndpointName"></a>

```csharp
public string OriginEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name Mediapackagev2OriginEndpointPolicy#origin_endpoint_name}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#policy Mediapackagev2OriginEndpointPolicy#policy}.

---

##### `CdnAuthConfiguration`<sup>Optional</sup> <a name="CdnAuthConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyConfig.property.cdnAuthConfiguration"></a>

```csharp
public Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration CdnAuthConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

<p>The settings to enable CDN authorization headers in MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration Mediapackagev2OriginEndpointPolicy#cdn_auth_configuration}

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference <a name="Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns">ResetCdnIdentifierSecretArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn">ResetSecretsRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdnIdentifierSecretArns` <a name="ResetCdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetCdnIdentifierSecretArns"></a>

```csharp
private void ResetCdnIdentifierSecretArns()
```

##### `ResetSecretsRoleArn` <a name="ResetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.resetSecretsRoleArn"></a>

```csharp
private void ResetSecretsRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput">CdnIdentifierSecretArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput">SecretsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns">CdnIdentifierSecretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn">SecretsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CdnIdentifierSecretArnsInput`<sup>Optional</sup> <a name="CdnIdentifierSecretArnsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArnsInput"></a>

```csharp
public string[] CdnIdentifierSecretArnsInput { get; }
```

- *Type:* string[]

---

##### `SecretsRoleArnInput`<sup>Optional</sup> <a name="SecretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArnInput"></a>

```csharp
public string SecretsRoleArnInput { get; }
```

- *Type:* string

---

##### `CdnIdentifierSecretArns`<sup>Required</sup> <a name="CdnIdentifierSecretArns" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.cdnIdentifierSecretArns"></a>

```csharp
public string[] CdnIdentifierSecretArns { get; }
```

- *Type:* string[]

---

##### `SecretsRoleArn`<sup>Required</sup> <a name="SecretsRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.secretsRoleArn"></a>

```csharp
public string SecretsRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpointPolicy.Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration">Mediapackagev2OriginEndpointPolicyCdnAuthConfiguration</a>

---



