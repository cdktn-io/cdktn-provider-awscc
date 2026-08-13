# `serverlessrepoApplication` Submodule <a name="`serverlessrepoApplication` Submodule" id="@cdktn/provider-awscc.serverlessrepoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessrepoApplication <a name="ServerlessrepoApplication" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServerlessrepoApplication(Construct Scope, string Id, ServerlessrepoApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl">ResetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody">ResetLicenseBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody">ResetReadmeBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl">ResetSourceCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId">ResetSpdxLicenseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHomePageUrl` <a name="ResetHomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl"></a>

```csharp
private void ResetHomePageUrl()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLicenseBody` <a name="ResetLicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody"></a>

```csharp
private void ResetLicenseBody()
```

##### `ResetReadmeBody` <a name="ResetReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody"></a>

```csharp
private void ResetReadmeBody()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion"></a>

```csharp
private void ResetSemanticVersion()
```

##### `ResetSourceCodeUrl` <a name="ResetSourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl"></a>

```csharp
private void ResetSourceCodeUrl()
```

##### `ResetSpdxLicenseId` <a name="ResetSpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId"></a>

```csharp
private void ResetSpdxLicenseId()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServerlessrepoApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServerlessrepoApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServerlessrepoApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServerlessrepoApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerlessrepoApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerlessrepoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessrepoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor">IsVerifiedAuthor</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput">AuthorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput">HomePageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput">LicenseBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput">ReadmeBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput">SourceCodeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput">SpdxLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl">HomePageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody">LicenseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody">ReadmeBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId">SpdxLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsVerifiedAuthor`<sup>Required</sup> <a name="IsVerifiedAuthor" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor"></a>

```csharp
public IResolvable IsVerifiedAuthor { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput"></a>

```csharp
public string AuthorInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HomePageUrlInput`<sup>Optional</sup> <a name="HomePageUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput"></a>

```csharp
public string HomePageUrlInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `LicenseBodyInput`<sup>Optional</sup> <a name="LicenseBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput"></a>

```csharp
public string LicenseBodyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadmeBodyInput`<sup>Optional</sup> <a name="ReadmeBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput"></a>

```csharp
public string ReadmeBodyInput { get; }
```

- *Type:* string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput"></a>

```csharp
public string SemanticVersionInput { get; }
```

- *Type:* string

---

##### `SourceCodeUrlInput`<sup>Optional</sup> <a name="SourceCodeUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput"></a>

```csharp
public string SourceCodeUrlInput { get; }
```

- *Type:* string

---

##### `SpdxLicenseIdInput`<sup>Optional</sup> <a name="SpdxLicenseIdInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput"></a>

```csharp
public string SpdxLicenseIdInput { get; }
```

- *Type:* string

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HomePageUrl`<sup>Required</sup> <a name="HomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl"></a>

```csharp
public string HomePageUrl { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `LicenseBody`<sup>Required</sup> <a name="LicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody"></a>

```csharp
public string LicenseBody { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadmeBody`<sup>Required</sup> <a name="ReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody"></a>

```csharp
public string ReadmeBody { get; }
```

- *Type:* string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; }
```

- *Type:* string

---

##### `SourceCodeUrl`<sup>Required</sup> <a name="SourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl"></a>

```csharp
public string SourceCodeUrl { get; }
```

- *Type:* string

---

##### `SpdxLicenseId`<sup>Required</sup> <a name="SpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId"></a>

```csharp
public string SpdxLicenseId { get; }
```

- *Type:* string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationConfig <a name="ServerlessrepoApplicationConfig" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServerlessrepoApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Author,
    string Description,
    string Name,
    string HomePageUrl = null,
    string[] Labels = null,
    string LicenseBody = null,
    string ReadmeBody = null,
    string SemanticVersion = null,
    string SourceCodeUrl = null,
    string SpdxLicenseId = null,
    string TemplateBody = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author">Author</a></code> | <code>string</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description">Description</a></code> | <code>string</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl">HomePageUrl</a></code> | <code>string</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels">Labels</a></code> | <code>string[]</code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody">LicenseBody</a></code> | <code>string</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody">ReadmeBody</a></code> | <code>string</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>string</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId">SpdxLicenseId</a></code> | <code>string</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author"></a>

```csharp
public string Author { get; set; }
```

- *Type:* string

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `HomePageUrl`<sup>Optional</sup> <a name="HomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl"></a>

```csharp
public string HomePageUrl { get; set; }
```

- *Type:* string

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `LicenseBody`<sup>Optional</sup> <a name="LicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody"></a>

```csharp
public string LicenseBody { get; set; }
```

- *Type:* string

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `ReadmeBody`<sup>Optional</sup> <a name="ReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody"></a>

```csharp
public string ReadmeBody { get; set; }
```

- *Type:* string

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; set; }
```

- *Type:* string

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `SourceCodeUrl`<sup>Optional</sup> <a name="SourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl"></a>

```csharp
public string SourceCodeUrl { get; set; }
```

- *Type:* string

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `SpdxLicenseId`<sup>Optional</sup> <a name="SpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId"></a>

```csharp
public string SpdxLicenseId { get; set; }
```

- *Type:* string

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---



