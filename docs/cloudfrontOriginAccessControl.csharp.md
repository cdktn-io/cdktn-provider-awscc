# `cloudfrontOriginAccessControl` Submodule <a name="`cloudfrontOriginAccessControl` Submodule" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessControl <a name="CloudfrontOriginAccessControl" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontOriginAccessControl(Construct Scope, string Id, CloudfrontOriginAccessControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig">CloudfrontOriginAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig">PutOriginAccessControlConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOriginAccessControlConfig` <a name="PutOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig"></a>

```csharp
private void PutOriginAccessControlConfig(CloudfrontOriginAccessControlOriginAccessControlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.putOriginAccessControlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontOriginAccessControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontOriginAccessControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontOriginAccessControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontOriginAccessControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontOriginAccessControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontOriginAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontOriginAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig">OriginAccessControlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId">OriginAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput">OriginAccessControlConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OriginAccessControlConfig`<sup>Required</sup> <a name="OriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfig"></a>

```csharp
public CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference OriginAccessControlConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a>

---

##### `OriginAccessControlId`<sup>Required</sup> <a name="OriginAccessControlId" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlId"></a>

```csharp
public string OriginAccessControlId { get; }
```

- *Type:* string

---

##### `OriginAccessControlConfigInput`<sup>Optional</sup> <a name="OriginAccessControlConfigInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.originAccessControlConfigInput"></a>

```csharp
public IResolvable|CloudfrontOriginAccessControlOriginAccessControlConfig OriginAccessControlConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessControlConfig <a name="CloudfrontOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontOriginAccessControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudfrontOriginAccessControlOriginAccessControlConfig OriginAccessControlConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig">OriginAccessControlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | The origin access control. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OriginAccessControlConfig`<sup>Required</sup> <a name="OriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlConfig.property.originAccessControlConfig"></a>

```csharp
public CloudfrontOriginAccessControlOriginAccessControlConfig OriginAccessControlConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

The origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#origin_access_control_config CloudfrontOriginAccessControl#origin_access_control_config}

---

### CloudfrontOriginAccessControlOriginAccessControlConfig <a name="CloudfrontOriginAccessControlOriginAccessControlConfig" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontOriginAccessControlOriginAccessControlConfig {
    string Name,
    string OriginAccessControlOriginType,
    string SigningBehavior,
    string SigningProtocol,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name">Name</a></code> | <code>string</code> | A name to identify the origin access control. You can specify up to 64 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType">OriginAccessControlOriginType</a></code> | <code>string</code> | The type of origin that this origin access control is for. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior">SigningBehavior</a></code> | <code>string</code> | Specifies which requests CloudFront signs (adds authentication information to). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol">SigningProtocol</a></code> | <code>string</code> | The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description">Description</a></code> | <code>string</code> | A description of the origin access control. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name to identify the origin access control. You can specify up to 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#name CloudfrontOriginAccessControl#name}

---

##### `OriginAccessControlOriginType`<sup>Required</sup> <a name="OriginAccessControlOriginType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.originAccessControlOriginType"></a>

```csharp
public string OriginAccessControlOriginType { get; set; }
```

- *Type:* string

The type of origin that this origin access control is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#origin_access_control_origin_type CloudfrontOriginAccessControl#origin_access_control_origin_type}

---

##### `SigningBehavior`<sup>Required</sup> <a name="SigningBehavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingBehavior"></a>

```csharp
public string SigningBehavior { get; set; }
```

- *Type:* string

Specifies which requests CloudFront signs (adds authentication information to).

Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
This field can have one of the following values:

* `always` ? CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if one exists.
* `never` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
* `no-override` ? If the viewer request doesn't contain the `Authorization` header, then CloudFront signs the origin request. If the viewer request contains the `Authorization` header, then CloudFront doesn't sign the origin request and instead passes along the `Authorization` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#signing_behavior CloudfrontOriginAccessControl#signing_behavior}

---

##### `SigningProtocol`<sup>Required</sup> <a name="SigningProtocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.signingProtocol"></a>

```csharp
public string SigningProtocol { get; set; }
```

- *Type:* string

The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests.

The only valid value is `sigv4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#signing_protocol CloudfrontOriginAccessControl#signing_protocol}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the origin access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_origin_access_control#description CloudfrontOriginAccessControl#description}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference <a name="CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput">OriginAccessControlOriginTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput">SigningBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput">SigningProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType">OriginAccessControlOriginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior">SigningBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol">SigningProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginAccessControlOriginTypeInput`<sup>Optional</sup> <a name="OriginAccessControlOriginTypeInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginTypeInput"></a>

```csharp
public string OriginAccessControlOriginTypeInput { get; }
```

- *Type:* string

---

##### `SigningBehaviorInput`<sup>Optional</sup> <a name="SigningBehaviorInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehaviorInput"></a>

```csharp
public string SigningBehaviorInput { get; }
```

- *Type:* string

---

##### `SigningProtocolInput`<sup>Optional</sup> <a name="SigningProtocolInput" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocolInput"></a>

```csharp
public string SigningProtocolInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginAccessControlOriginType`<sup>Required</sup> <a name="OriginAccessControlOriginType" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType"></a>

```csharp
public string OriginAccessControlOriginType { get; }
```

- *Type:* string

---

##### `SigningBehavior`<sup>Required</sup> <a name="SigningBehavior" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior"></a>

```csharp
public string SigningBehavior { get; }
```

- *Type:* string

---

##### `SigningProtocol`<sup>Required</sup> <a name="SigningProtocol" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol"></a>

```csharp
public string SigningProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontOriginAccessControlOriginAccessControlConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontOriginAccessControl.CloudfrontOriginAccessControlOriginAccessControlConfig">CloudfrontOriginAccessControlOriginAccessControlConfig</a>

---



