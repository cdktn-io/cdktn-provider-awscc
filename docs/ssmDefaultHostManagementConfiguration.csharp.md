# `ssmDefaultHostManagementConfiguration` Submodule <a name="`ssmDefaultHostManagementConfiguration` Submodule" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultHostManagementConfiguration <a name="SsmDefaultHostManagementConfiguration" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDefaultHostManagementConfiguration(Construct Scope, string Id, SsmDefaultHostManagementConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn">ResetCustomerManagedRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomerManagedRoleArn` <a name="ResetCustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn"></a>

```csharp
private void ResetCustomerManagedRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDefaultHostManagementConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDefaultHostManagementConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDefaultHostManagementConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmDefaultHostManagementConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmDefaultHostManagementConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmDefaultHostManagementConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmDefaultHostManagementConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser">LastModifiedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn">SettingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId">SettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput">CustomerManagedRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput">PermissionModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn">CustomerManagedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel">PermissionModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser"></a>

```csharp
public string LastModifiedUser { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SettingArn`<sup>Required</sup> <a name="SettingArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn"></a>

```csharp
public string SettingArn { get; }
```

- *Type:* string

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId"></a>

```csharp
public string SettingId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CustomerManagedRoleArnInput`<sup>Optional</sup> <a name="CustomerManagedRoleArnInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput"></a>

```csharp
public string CustomerManagedRoleArnInput { get; }
```

- *Type:* string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput"></a>

```csharp
public string PermissionModelInput { get; }
```

- *Type:* string

---

##### `CustomerManagedRoleArn`<sup>Required</sup> <a name="CustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn"></a>

```csharp
public string CustomerManagedRoleArn { get; }
```

- *Type:* string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel"></a>

```csharp
public string PermissionModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultHostManagementConfigurationConfig <a name="SsmDefaultHostManagementConfigurationConfig" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmDefaultHostManagementConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PermissionModel,
    string CustomerManagedRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel">PermissionModel</a></code> | <code>string</code> | The permission model used to enable DHMC. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn">CustomerManagedRoleArn</a></code> | <code>string</code> | The ARN of the customer-provided IAM role to register for DHMC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel"></a>

```csharp
public string PermissionModel { get; set; }
```

- *Type:* string

The permission model used to enable DHMC.

SERVICE_MANAGED lets SSM create and manage the DHMC IAM role on your behalf. SELF_MANAGED registers an IAM role that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#permission_model SsmDefaultHostManagementConfiguration#permission_model}

---

##### `CustomerManagedRoleArn`<sup>Optional</sup> <a name="CustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn"></a>

```csharp
public string CustomerManagedRoleArn { get; set; }
```

- *Type:* string

The ARN of the customer-provided IAM role to register for DHMC.

Required when PermissionModel is SELF_MANAGED and must not be set when PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#customer_managed_role_arn SsmDefaultHostManagementConfiguration#customer_managed_role_arn}

---



