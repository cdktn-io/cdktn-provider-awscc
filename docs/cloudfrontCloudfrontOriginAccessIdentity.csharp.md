# `cloudfrontCloudfrontOriginAccessIdentity` Submodule <a name="`cloudfrontCloudfrontOriginAccessIdentity` Submodule" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontCloudfrontOriginAccessIdentity <a name="CloudfrontCloudfrontOriginAccessIdentity" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontCloudfrontOriginAccessIdentity(Construct Scope, string Id, CloudfrontCloudfrontOriginAccessIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig">PutCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudfrontOriginAccessIdentityConfig` <a name="PutCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig"></a>

```csharp
private void PutCloudfrontOriginAccessIdentityConfig(CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.putCloudfrontOriginAccessIdentityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontCloudfrontOriginAccessIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontCloudfrontOriginAccessIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontCloudfrontOriginAccessIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontCloudfrontOriginAccessIdentity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontCloudfrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontCloudfrontOriginAccessIdentity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontCloudfrontOriginAccessIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontCloudfrontOriginAccessIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId">CloudfrontOriginAccessIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId">S3CanonicalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfigInput">CloudfrontOriginAccessIdentityConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="CloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfig"></a>

```csharp
public CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference CloudfrontOriginAccessIdentityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference</a>

---

##### `CloudfrontOriginAccessIdentityId`<sup>Required</sup> <a name="CloudfrontOriginAccessIdentityId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityId"></a>

```csharp
public string CloudfrontOriginAccessIdentityId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3CanonicalUserId`<sup>Required</sup> <a name="S3CanonicalUserId" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```csharp
public string S3CanonicalUserId { get; }
```

- *Type:* string

---

##### `CloudfrontOriginAccessIdentityConfigInput`<sup>Optional</sup> <a name="CloudfrontOriginAccessIdentityConfigInput" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.cloudfrontOriginAccessIdentityConfigInput"></a>

```csharp
public IResolvable|CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig CloudfrontOriginAccessIdentityConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig <a name="CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig {
    string Comment
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.property.comment">Comment</a></code> | <code>string</code> | A comment to describe the origin access identity. The comment cannot be longer than 128 characters. |

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A comment to describe the origin access identity. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#comment CloudfrontCloudfrontOriginAccessIdentity#comment}

---

### CloudfrontCloudfrontOriginAccessIdentityConfig <a name="CloudfrontCloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontCloudfrontOriginAccessIdentityConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig CloudfrontOriginAccessIdentityConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.cloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | The current configuration information for the identity. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudfrontOriginAccessIdentityConfig`<sup>Required</sup> <a name="CloudfrontOriginAccessIdentityConfig" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityConfig.property.cloudfrontOriginAccessIdentityConfig"></a>

```csharp
public CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig CloudfrontOriginAccessIdentityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

The current configuration information for the identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cloudfront_origin_access_identity#cloudfront_origin_access_identity_config CloudfrontCloudfrontOriginAccessIdentity#cloudfront_origin_access_identity_config}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference <a name="CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontCloudfrontOriginAccessIdentity.CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig">CloudfrontCloudfrontOriginAccessIdentityCloudfrontOriginAccessIdentityConfig</a>

---



