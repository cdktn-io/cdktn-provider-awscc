# `datazoneEnvironment` Submodule <a name="`datazoneEnvironment` Submodule" id="@cdktn/provider-awscc.datazoneEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironment <a name="DatazoneEnvironment" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment awscc_datazone_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironment(Construct Scope, string Id, DatazoneEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters">PutUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder">ResetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier">ResetEnvironmentAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion">ResetEnvironmentAccountRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier">ResetEnvironmentBlueprintIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId">ResetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier">ResetEnvironmentProfileIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn">ResetEnvironmentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters">ResetUserParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUserParameters` <a name="PutUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters"></a>

```csharp
private void PutUserParameters(IResolvable|DatazoneEnvironmentUserParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---

##### `ResetDeploymentOrder` <a name="ResetDeploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder"></a>

```csharp
private void ResetDeploymentOrder()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentAccountIdentifier` <a name="ResetEnvironmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier"></a>

```csharp
private void ResetEnvironmentAccountIdentifier()
```

##### `ResetEnvironmentAccountRegion` <a name="ResetEnvironmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion"></a>

```csharp
private void ResetEnvironmentAccountRegion()
```

##### `ResetEnvironmentBlueprintIdentifier` <a name="ResetEnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier"></a>

```csharp
private void ResetEnvironmentBlueprintIdentifier()
```

##### `ResetEnvironmentConfigurationId` <a name="ResetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId"></a>

```csharp
private void ResetEnvironmentConfigurationId()
```

##### `ResetEnvironmentProfileIdentifier` <a name="ResetEnvironmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier"></a>

```csharp
private void ResetEnvironmentProfileIdentifier()
```

##### `ResetEnvironmentRoleArn` <a name="ResetEnvironmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn"></a>

```csharp
private void ResetEnvironmentRoleArn()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms"></a>

```csharp
private void ResetGlossaryTerms()
```

##### `ResetUserParameters` <a name="ResetUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters"></a>

```csharp
private void ResetUserParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion">AwsAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId">EnvironmentProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters">UserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput">DeploymentOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput">EnvironmentAccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput">EnvironmentAccountRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput">EnvironmentBlueprintIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput">EnvironmentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput">EnvironmentProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput">EnvironmentRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput">UserParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder">DeploymentOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier">EnvironmentAccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion">EnvironmentAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier">EnvironmentProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn">EnvironmentRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms">GlossaryTerms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsAccountRegion`<sup>Required</sup> <a name="AwsAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion"></a>

```csharp
public string AwsAccountRegion { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId"></a>

```csharp
public string EnvironmentBlueprintId { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EnvironmentProfileId`<sup>Required</sup> <a name="EnvironmentProfileId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId"></a>

```csharp
public string EnvironmentProfileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UserParameters`<sup>Required</sup> <a name="UserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters"></a>

```csharp
public DatazoneEnvironmentUserParametersList UserParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a>

---

##### `DeploymentOrderInput`<sup>Optional</sup> <a name="DeploymentOrderInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput"></a>

```csharp
public double DeploymentOrderInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentAccountIdentifierInput`<sup>Optional</sup> <a name="EnvironmentAccountIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput"></a>

```csharp
public string EnvironmentAccountIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentAccountRegionInput`<sup>Optional</sup> <a name="EnvironmentAccountRegionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput"></a>

```csharp
public string EnvironmentAccountRegionInput { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput"></a>

```csharp
public string EnvironmentBlueprintIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurationIdInput`<sup>Optional</sup> <a name="EnvironmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput"></a>

```csharp
public string EnvironmentConfigurationIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentProfileIdentifierInput`<sup>Optional</sup> <a name="EnvironmentProfileIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput"></a>

```csharp
public string EnvironmentProfileIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentRoleArnInput`<sup>Optional</sup> <a name="EnvironmentRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput"></a>

```csharp
public string EnvironmentRoleArnInput { get; }
```

- *Type:* string

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput"></a>

```csharp
public string[] GlossaryTermsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput"></a>

```csharp
public string ProjectIdentifierInput { get; }
```

- *Type:* string

---

##### `UserParametersInput`<sup>Optional</sup> <a name="UserParametersInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput"></a>

```csharp
public IResolvable|DatazoneEnvironmentUserParameters[] UserParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---

##### `DeploymentOrder`<sup>Required</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder"></a>

```csharp
public double DeploymentOrder { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentAccountIdentifier`<sup>Required</sup> <a name="EnvironmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier"></a>

```csharp
public string EnvironmentAccountIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentAccountRegion`<sup>Required</sup> <a name="EnvironmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion"></a>

```csharp
public string EnvironmentAccountRegion { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier"></a>

```csharp
public string EnvironmentBlueprintIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentConfigurationId`<sup>Required</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId"></a>

```csharp
public string EnvironmentConfigurationId { get; }
```

- *Type:* string

---

##### `EnvironmentProfileIdentifier`<sup>Required</sup> <a name="EnvironmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier"></a>

```csharp
public string EnvironmentProfileIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentRoleArn`<sup>Required</sup> <a name="EnvironmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn"></a>

```csharp
public string EnvironmentRoleArn { get; }
```

- *Type:* string

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms"></a>

```csharp
public string[] GlossaryTerms { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentConfig <a name="DatazoneEnvironmentConfig" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string Name,
    string ProjectIdentifier,
    double DeploymentOrder = null,
    string Description = null,
    string EnvironmentAccountIdentifier = null,
    string EnvironmentAccountRegion = null,
    string EnvironmentBlueprintIdentifier = null,
    string EnvironmentConfigurationId = null,
    string EnvironmentProfileIdentifier = null,
    string EnvironmentRoleArn = null,
    string[] GlossaryTerms = null,
    IResolvable|DatazoneEnvironmentUserParameters[] UserParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder">DeploymentOrder</a></code> | <code>double</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier">EnvironmentAccountIdentifier</a></code> | <code>string</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion">EnvironmentAccountRegion</a></code> | <code>string</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>string</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>string</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier">EnvironmentProfileIdentifier</a></code> | <code>string</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn">EnvironmentRoleArn</a></code> | <code>string</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms">GlossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters">UserParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | The user parameters of the Amazon DataZone environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier"></a>

```csharp
public string ProjectIdentifier { get; set; }
```

- *Type:* string

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `DeploymentOrder`<sup>Optional</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder"></a>

```csharp
public double DeploymentOrder { get; set; }
```

- *Type:* double

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `EnvironmentAccountIdentifier`<sup>Optional</sup> <a name="EnvironmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier"></a>

```csharp
public string EnvironmentAccountIdentifier { get; set; }
```

- *Type:* string

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `EnvironmentAccountRegion`<sup>Optional</sup> <a name="EnvironmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion"></a>

```csharp
public string EnvironmentAccountRegion { get; set; }
```

- *Type:* string

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `EnvironmentBlueprintIdentifier`<sup>Optional</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier"></a>

```csharp
public string EnvironmentBlueprintIdentifier { get; set; }
```

- *Type:* string

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `EnvironmentConfigurationId`<sup>Optional</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId"></a>

```csharp
public string EnvironmentConfigurationId { get; set; }
```

- *Type:* string

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `EnvironmentProfileIdentifier`<sup>Optional</sup> <a name="EnvironmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier"></a>

```csharp
public string EnvironmentProfileIdentifier { get; set; }
```

- *Type:* string

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `EnvironmentRoleArn`<sup>Optional</sup> <a name="EnvironmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn"></a>

```csharp
public string EnvironmentRoleArn { get; set; }
```

- *Type:* string

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms"></a>

```csharp
public string[] GlossaryTerms { get; set; }
```

- *Type:* string[]

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `UserParameters`<sup>Optional</sup> <a name="UserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters"></a>

```csharp
public IResolvable|DatazoneEnvironmentUserParameters[] UserParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

### DatazoneEnvironmentUserParameters <a name="DatazoneEnvironmentUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentUserParameters {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name">Name</a></code> | <code>string</code> | The name of an environment parameter. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value">Value</a></code> | <code>string</code> | The value of an environment parameter. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentUserParametersList <a name="DatazoneEnvironmentUserParametersList" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentUserParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get"></a>

```csharp
private DatazoneEnvironmentUserParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentUserParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---


### DatazoneEnvironmentUserParametersOutputReference <a name="DatazoneEnvironmentUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentUserParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentUserParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>

---



