# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfile(Construct Scope, string Id, CloudfrontFieldLevelEncryptionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig">PutFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFieldLevelEncryptionProfileConfig` <a name="PutFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig"></a>

```csharp
private void PutFieldLevelEncryptionProfileConfig(CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontFieldLevelEncryptionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontFieldLevelEncryptionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontFieldLevelEncryptionProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontFieldLevelEncryptionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig">FieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId">FieldLevelEncryptionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput">FieldLevelEncryptionProfileConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="FieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference FieldLevelEncryptionProfileConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a>

---

##### `FieldLevelEncryptionProfileId`<sup>Required</sup> <a name="FieldLevelEncryptionProfileId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId"></a>

```csharp
public string FieldLevelEncryptionProfileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `FieldLevelEncryptionProfileConfigInput`<sup>Optional</sup> <a name="FieldLevelEncryptionProfileConfigInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig">FieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | The configuration of a field-level encryption profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="FieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig FieldLevelEncryptionProfileConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

The configuration of a field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_level_encryption_profile_config CloudfrontFieldLevelEncryptionProfile#field_level_encryption_profile_config}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig {
    string CallerReference,
    IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] EncryptionEntities,
    string Name,
    string Comment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference">CallerReference</a></code> | <code>string</code> | A unique value that identifies the creation request. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities">EncryptionEntities</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | The encryption entities of the field-level encryption profile. At least one entity is required. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name">Name</a></code> | <code>string</code> | The name of the field-level encryption profile. Names are unique within an AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment">Comment</a></code> | <code>string</code> | An optional comment describing the field-level encryption profile. |

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference"></a>

```csharp
public string CallerReference { get; set; }
```

- *Type:* string

A unique value that identifies the creation request.

Caller references are unique within an AWS account and cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#caller_reference CloudfrontFieldLevelEncryptionProfile#caller_reference}

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] EncryptionEntities { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

The encryption entities of the field-level encryption profile. At least one entity is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the field-level encryption profile. Names are unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

An optional comment describing the field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities {
    string[] FieldPatterns,
    string ProviderId,
    string PublicKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns">FieldPatterns</a></code> | <code>string[]</code> | The request-body field names to encrypt. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId">ProviderId</a></code> | <code>string</code> | The provider associated with the public key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | The identifier of the CloudFront public key used to encrypt the fields that match the patterns. |

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns"></a>

```csharp
public string[] FieldPatterns { get; set; }
```

- *Type:* string[]

The request-body field names to encrypt.

A pattern is either a full field name or leading characters followed by a wildcard (*). Patterns are case-sensitive and must not overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

The provider associated with the public key.

The same value must be supplied with the private key for an application to decrypt the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; set; }
```

- *Type:* string

The identifier of the CloudFront public key used to encrypt the fields that match the patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get"></a>

```csharp
private CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput">FieldPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput">PublicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns">FieldPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId">PublicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPatternsInput`<sup>Optional</sup> <a name="FieldPatternsInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput"></a>

```csharp
public string[] FieldPatternsInput { get; }
```

- *Type:* string[]

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `PublicKeyIdInput`<sup>Optional</sup> <a name="PublicKeyIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput"></a>

```csharp
public string PublicKeyIdInput { get; }
```

- *Type:* string

---

##### `FieldPatterns`<sup>Required</sup> <a name="FieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns"></a>

```csharp
public string[] FieldPatterns { get; }
```

- *Type:* string[]

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `PublicKeyId`<sup>Required</sup> <a name="PublicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId"></a>

```csharp
public string PublicKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities">PutEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionEntities` <a name="PutEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities"></a>

```csharp
private void PutEncryptionEntities(IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities">EncryptionEntities</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput">CallerReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput">EncryptionEntitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference">CallerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionEntities`<sup>Required</sup> <a name="EncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities"></a>

```csharp
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList EncryptionEntities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a>

---

##### `CallerReferenceInput`<sup>Optional</sup> <a name="CallerReferenceInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput"></a>

```csharp
public string CallerReferenceInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EncryptionEntitiesInput`<sup>Optional</sup> <a name="EncryptionEntitiesInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[] EncryptionEntitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CallerReference`<sup>Required</sup> <a name="CallerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference"></a>

```csharp
public string CallerReference { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---



