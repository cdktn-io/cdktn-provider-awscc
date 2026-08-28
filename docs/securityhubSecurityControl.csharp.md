# `securityhubSecurityControl` Submodule <a name="`securityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.securityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubSecurityControl <a name="SecurityhubSecurityControl" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControl(Construct Scope, string Id, SecurityhubSecurityControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason">ResetLastUpdateReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn">ResetSecurityControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId">ResetSecurityControlId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters"></a>

```csharp
private void PutParameters(IResolvable|System.Collections.Generic.IDictionary<string, SecurityhubSecurityControlParameters> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---

##### `ResetLastUpdateReason` <a name="ResetLastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason"></a>

```csharp
private void ResetLastUpdateReason()
```

##### `ResetSecurityControlArn` <a name="ResetSecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn"></a>

```csharp
private void ResetSecurityControlArn()
```

##### `ResetSecurityControlId` <a name="ResetSecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId"></a>

```csharp
private void ResetSecurityControlId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubSecurityControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubSecurityControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubSecurityControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubSecurityControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubSecurityControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput">LastUpdateReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput">SecurityControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason">LastUpdateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn">SecurityControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters"></a>

```csharp
public SecurityhubSecurityControlParametersMap Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a>

---

##### `LastUpdateReasonInput`<sup>Optional</sup> <a name="LastUpdateReasonInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput"></a>

```csharp
public string LastUpdateReasonInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SecurityhubSecurityControlParameters> ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---

##### `SecurityControlArnInput`<sup>Optional</sup> <a name="SecurityControlArnInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput"></a>

```csharp
public string SecurityControlArnInput { get; }
```

- *Type:* string

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput"></a>

```csharp
public string SecurityControlIdInput { get; }
```

- *Type:* string

---

##### `LastUpdateReason`<sup>Required</sup> <a name="LastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason"></a>

```csharp
public string LastUpdateReason { get; }
```

- *Type:* string

---

##### `SecurityControlArn`<sup>Required</sup> <a name="SecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn"></a>

```csharp
public string SecurityControlArn { get; }
```

- *Type:* string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubSecurityControlConfig <a name="SecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|System.Collections.Generic.IDictionary<string, SecurityhubSecurityControlParameters> Parameters,
    string LastUpdateReason = null,
    string SecurityControlArn = null,
    string SecurityControlId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason">LastUpdateReason</a></code> | <code>string</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn">SecurityControlArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId">SecurityControlId</a></code> | <code>string</code> | The unique identifier of a security control across standards. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SecurityhubSecurityControlParameters> Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `LastUpdateReason`<sup>Optional</sup> <a name="LastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason"></a>

```csharp
public string LastUpdateReason { get; set; }
```

- *Type:* string

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `SecurityControlArn`<sup>Optional</sup> <a name="SecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn"></a>

```csharp
public string SecurityControlArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `SecurityControlId`<sup>Optional</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId"></a>

```csharp
public string SecurityControlId { get; set; }
```

- *Type:* string

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

### SecurityhubSecurityControlParameters <a name="SecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlParameters {
    SecurityhubSecurityControlParametersValue Value = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value"></a>

```csharp
public SecurityhubSecurityControlParametersValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}.

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}.

---

### SecurityhubSecurityControlParametersValue <a name="SecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlParametersValue {
    bool|IResolvable Boolean = null,
    double Double = null,
    string Enum = null,
    string[] EnumList = null,
    double Integer = null,
    double[] IntegerList = null,
    string String = null,
    string[] StringList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean">Boolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double">Double</a></code> | <code>double</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum">Enum</a></code> | <code>string</code> | A control parameter that is a enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList">EnumList</a></code> | <code>string[]</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer">Integer</a></code> | <code>double</code> | A control parameter that is a integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList">IntegerList</a></code> | <code>double[]</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string">String</a></code> | <code>string</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList">StringList</a></code> | <code>string[]</code> | A control parameter that is a list of strings. |

---

##### `Boolean`<sup>Optional</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean"></a>

```csharp
public bool|IResolvable Boolean { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

##### `Double`<sup>Optional</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double"></a>

```csharp
public double Double { get; set; }
```

- *Type:* double

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum"></a>

```csharp
public string Enum { get; set; }
```

- *Type:* string

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

##### `EnumList`<sup>Optional</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList"></a>

```csharp
public string[] EnumList { get; set; }
```

- *Type:* string[]

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

##### `Integer`<sup>Optional</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer"></a>

```csharp
public double Integer { get; set; }
```

- *Type:* double

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

##### `IntegerList`<sup>Optional</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList"></a>

```csharp
public double[] IntegerList { get; set; }
```

- *Type:* double[]

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string"></a>

```csharp
public string String { get; set; }
```

- *Type:* string

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList"></a>

```csharp
public string[] StringList { get; set; }
```

- *Type:* string[]

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubSecurityControlParametersMap <a name="SecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get"></a>

```csharp
private SecurityhubSecurityControlParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, SecurityhubSecurityControlParameters> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>>

---


### SecurityhubSecurityControlParametersOutputReference <a name="SecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue"></a>

```csharp
private void PutValue(SecurityhubSecurityControlParametersValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value"></a>

```csharp
public SecurityhubSecurityControlParametersValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput"></a>

```csharp
public IResolvable|SecurityhubSecurityControlParametersValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubSecurityControlParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters">SecurityhubSecurityControlParameters</a>

---


### SecurityhubSecurityControlParametersValueOutputReference <a name="SecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubSecurityControlParametersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean">ResetBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble">ResetDouble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList">ResetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger">ResetInteger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList">ResetIntegerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolean` <a name="ResetBoolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean"></a>

```csharp
private void ResetBoolean()
```

##### `ResetDouble` <a name="ResetDouble" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble"></a>

```csharp
private void ResetDouble()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetEnumList` <a name="ResetEnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList"></a>

```csharp
private void ResetEnumList()
```

##### `ResetInteger` <a name="ResetInteger" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger"></a>

```csharp
private void ResetInteger()
```

##### `ResetIntegerList` <a name="ResetIntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList"></a>

```csharp
private void ResetIntegerList()
```

##### `ResetString` <a name="ResetString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString"></a>

```csharp
private void ResetString()
```

##### `ResetStringList` <a name="ResetStringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList"></a>

```csharp
private void ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput">BooleanInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput">DoubleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput">EnumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput">EnumListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput">IntegerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput">IntegerListInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput">StringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput">StringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean">Boolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double">Double</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum">Enum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList">EnumList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer">Integer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList">IntegerList</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string">String</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList">StringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanInput`<sup>Optional</sup> <a name="BooleanInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput"></a>

```csharp
public bool|IResolvable BooleanInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleInput`<sup>Optional</sup> <a name="DoubleInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput"></a>

```csharp
public double DoubleInput { get; }
```

- *Type:* double

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput"></a>

```csharp
public string EnumInput { get; }
```

- *Type:* string

---

##### `EnumListInput`<sup>Optional</sup> <a name="EnumListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput"></a>

```csharp
public string[] EnumListInput { get; }
```

- *Type:* string[]

---

##### `IntegerInput`<sup>Optional</sup> <a name="IntegerInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput"></a>

```csharp
public double IntegerInput { get; }
```

- *Type:* double

---

##### `IntegerListInput`<sup>Optional</sup> <a name="IntegerListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput"></a>

```csharp
public double[] IntegerListInput { get; }
```

- *Type:* double[]

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput"></a>

```csharp
public string StringInput { get; }
```

- *Type:* string

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput"></a>

```csharp
public string[] StringListInput { get; }
```

- *Type:* string[]

---

##### `Boolean`<sup>Required</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```csharp
public bool|IResolvable Boolean { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```csharp
public double Double { get; }
```

- *Type:* double

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```csharp
public string Enum { get; }
```

- *Type:* string

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```csharp
public string[] EnumList { get; }
```

- *Type:* string[]

---

##### `Integer`<sup>Required</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```csharp
public double Integer { get; }
```

- *Type:* double

---

##### `IntegerList`<sup>Required</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```csharp
public double[] IntegerList { get; }
```

- *Type:* double[]

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```csharp
public string String { get; }
```

- *Type:* string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```csharp
public string[] StringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubSecurityControlParametersValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---



