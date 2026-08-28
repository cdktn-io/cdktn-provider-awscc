# `dataAwsccSsmquicksetupLifecycleAutomation` Submodule <a name="`dataAwsccSsmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmquicksetupLifecycleAutomation <a name="DataAwsccSsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmquicksetupLifecycleAutomation(Construct Scope, string Id, DataAwsccSsmquicksetupLifecycleAutomationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig">DataAwsccSsmquicksetupLifecycleAutomationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig">DataAwsccSsmquicksetupLifecycleAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmquicksetupLifecycleAutomation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmquicksetupLifecycleAutomation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmquicksetupLifecycleAutomation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsmquicksetupLifecycleAutomation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmquicksetupLifecycleAutomation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.automationDocument">AutomationDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.automationParameters">AutomationParameters</a></code> | <code>Io.Cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.resourceKey">ResourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `AutomationDocument`<sup>Required</sup> <a name="AutomationDocument" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```csharp
public string AutomationDocument { get; }
```

- *Type:* string

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```csharp
public StringListMap AutomationParameters { get; }
```

- *Type:* Io.Cdktn.StringListMap

---

##### `ResourceKey`<sup>Required</sup> <a name="ResourceKey" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```csharp
public string ResourceKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmquicksetupLifecycleAutomationConfig <a name="DataAwsccSsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsmquicksetupLifecycleAutomationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupLifecycleAutomation.DataAwsccSsmquicksetupLifecycleAutomationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssmquicksetup_lifecycle_automation#id DataAwsccSsmquicksetupLifecycleAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



