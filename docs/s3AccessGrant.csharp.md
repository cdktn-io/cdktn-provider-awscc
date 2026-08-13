# `s3AccessGrant` Submodule <a name="`s3AccessGrant` Submodule" id="@cdktn/provider-awscc.s3AccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessGrant <a name="S3AccessGrant" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant awscc_s3_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrant(Construct Scope, string Id, S3AccessGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig">S3AccessGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig">S3AccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration">PutAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee">PutGrantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration">ResetAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn">ResetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType">ResetS3PrefixType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessGrantsLocationConfiguration` <a name="PutAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration"></a>

```csharp
private void PutAccessGrantsLocationConfiguration(S3AccessGrantAccessGrantsLocationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---

##### `PutGrantee` <a name="PutGrantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee"></a>

```csharp
private void PutGrantee(S3AccessGrantGrantee Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags"></a>

```csharp
private void PutTags(IResolvable|S3AccessGrantTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---

##### `ResetAccessGrantsLocationConfiguration` <a name="ResetAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration"></a>

```csharp
private void ResetAccessGrantsLocationConfiguration()
```

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn"></a>

```csharp
private void ResetApplicationArn()
```

##### `ResetS3PrefixType` <a name="ResetS3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType"></a>

```csharp
private void ResetS3PrefixType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3AccessGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3AccessGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3AccessGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3AccessGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3AccessGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3AccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3AccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn">AccessGrantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId">AccessGrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope">GrantScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput">AccessGrantsLocationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput">AccessGrantsLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput">GranteeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput">S3PrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType">S3PrefixType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessGrantArn`<sup>Required</sup> <a name="AccessGrantArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn"></a>

```csharp
public string AccessGrantArn { get; }
```

- *Type:* string

---

##### `AccessGrantId`<sup>Required</sup> <a name="AccessGrantId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId"></a>

```csharp
public string AccessGrantId { get; }
```

- *Type:* string

---

##### `AccessGrantsLocationConfiguration`<sup>Required</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration"></a>

```csharp
public S3AccessGrantAccessGrantsLocationConfigurationOutputReference AccessGrantsLocationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a>

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee"></a>

```csharp
public S3AccessGrantGranteeOutputReference Grantee { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a>

---

##### `GrantScope`<sup>Required</sup> <a name="GrantScope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope"></a>

```csharp
public string GrantScope { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags"></a>

```csharp
public S3AccessGrantTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a>

---

##### `AccessGrantsLocationConfigurationInput`<sup>Optional</sup> <a name="AccessGrantsLocationConfigurationInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```csharp
public IResolvable|S3AccessGrantAccessGrantsLocationConfiguration AccessGrantsLocationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---

##### `AccessGrantsLocationIdInput`<sup>Optional</sup> <a name="AccessGrantsLocationIdInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput"></a>

```csharp
public string AccessGrantsLocationIdInput { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput"></a>

```csharp
public IResolvable|S3AccessGrantGrantee GranteeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `S3PrefixTypeInput`<sup>Optional</sup> <a name="S3PrefixTypeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput"></a>

```csharp
public string S3PrefixTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput"></a>

```csharp
public IResolvable|S3AccessGrantTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId"></a>

```csharp
public string AccessGrantsLocationId { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `S3PrefixType`<sup>Required</sup> <a name="S3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType"></a>

```csharp
public string S3PrefixType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessGrantAccessGrantsLocationConfiguration <a name="S3AccessGrantAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantAccessGrantsLocationConfiguration {
    string S3SubPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">S3SubPrefix</a></code> | <code>string</code> | The S3 sub prefix of a registered location in your S3 Access Grants instance. |

---

##### `S3SubPrefix`<sup>Optional</sup> <a name="S3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```csharp
public string S3SubPrefix { get; set; }
```

- *Type:* string

The S3 sub prefix of a registered location in your S3 Access Grants instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_sub_prefix S3AccessGrant#s3_sub_prefix}

---

### S3AccessGrantConfig <a name="S3AccessGrantConfig" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessGrantsLocationId,
    S3AccessGrantGrantee Grantee,
    string Permission,
    S3AccessGrantAccessGrantsLocationConfiguration AccessGrantsLocationConfiguration = null,
    string ApplicationArn = null,
    string S3PrefixType = null,
    IResolvable|S3AccessGrantTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>string</code> | The custom S3 location to be accessed by the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee">Grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | The principal who will be granted permission to access S3. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission">Permission</a></code> | <code>string</code> | The level of access to be afforded to the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | The configuration options of the grant location, which is the S3 path to the data to which you are granting access. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | The ARN of the application grantees will use to access the location. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType">S3PrefixType</a></code> | <code>string</code> | The type of S3SubPrefix. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId"></a>

```csharp
public string AccessGrantsLocationId { get; set; }
```

- *Type:* string

The custom S3 location to be accessed by the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_id S3AccessGrant#access_grants_location_id}

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee"></a>

```csharp
public S3AccessGrantGrantee Grantee { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

The principal who will be granted permission to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee S3AccessGrant#grantee}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

The level of access to be afforded to the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#permission S3AccessGrant#permission}

---

##### `AccessGrantsLocationConfiguration`<sup>Optional</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```csharp
public S3AccessGrantAccessGrantsLocationConfiguration AccessGrantsLocationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

The configuration options of the grant location, which is the S3 path to the data to which you are granting access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#access_grants_location_configuration S3AccessGrant#access_grants_location_configuration}

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

The ARN of the application grantees will use to access the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#application_arn S3AccessGrant#application_arn}

---

##### `S3PrefixType`<sup>Optional</sup> <a name="S3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType"></a>

```csharp
public string S3PrefixType { get; set; }
```

- *Type:* string

The type of S3SubPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#s3_prefix_type S3AccessGrant#s3_prefix_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags"></a>

```csharp
public IResolvable|S3AccessGrantTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}.

---

### S3AccessGrantGrantee <a name="S3AccessGrantGrantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantGrantee {
    string GranteeIdentifier,
    string GranteeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>string</code> | The unique identifier of the Grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType">GranteeType</a></code> | <code>string</code> | Configures the transfer acceleration state for an Amazon S3 bucket. |

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier"></a>

```csharp
public string GranteeIdentifier { get; set; }
```

- *Type:* string

The unique identifier of the Grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_identifier S3AccessGrant#grantee_identifier}

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType"></a>

```csharp
public string GranteeType { get; set; }
```

- *Type:* string

Configures the transfer acceleration state for an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#grantee_type S3AccessGrant#grantee_type}

---

### S3AccessGrantTags <a name="S3AccessGrantTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#key S3AccessGrant#key}. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#value S3AccessGrant#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#key S3AccessGrant#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_access_grant#value S3AccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3AccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantAccessGrantsLocationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">ResetS3SubPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3SubPrefix` <a name="ResetS3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```csharp
private void ResetS3SubPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">S3SubPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">S3SubPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3SubPrefixInput`<sup>Optional</sup> <a name="S3SubPrefixInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```csharp
public string S3SubPrefixInput { get; }
```

- *Type:* string

---

##### `S3SubPrefix`<sup>Required</sup> <a name="S3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```csharp
public string S3SubPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3AccessGrantAccessGrantsLocationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---


### S3AccessGrantGranteeOutputReference <a name="S3AccessGrantGranteeOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantGranteeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput">GranteeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput">GranteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType">GranteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranteeIdentifierInput`<sup>Optional</sup> <a name="GranteeIdentifierInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```csharp
public string GranteeIdentifierInput { get; }
```

- *Type:* string

---

##### `GranteeTypeInput`<sup>Optional</sup> <a name="GranteeTypeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```csharp
public string GranteeTypeInput { get; }
```

- *Type:* string

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```csharp
public string GranteeIdentifier { get; }
```

- *Type:* string

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType"></a>

```csharp
public string GranteeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3AccessGrantGrantee InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---


### S3AccessGrantTagsList <a name="S3AccessGrantTagsList" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get"></a>

```csharp
private S3AccessGrantTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue"></a>

```csharp
public IResolvable|S3AccessGrantTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---


### S3AccessGrantTagsOutputReference <a name="S3AccessGrantTagsOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3AccessGrantTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3AccessGrantTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>

---



