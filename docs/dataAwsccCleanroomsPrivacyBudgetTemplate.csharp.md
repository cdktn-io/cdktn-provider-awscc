# `dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule <a name="`dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplate <a name="DataAwsccCleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplate(Construct Scope, string Id, DataAwsccCleanroomsPrivacyBudgetTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig">DataAwsccCleanroomsPrivacyBudgetTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig">DataAwsccCleanroomsPrivacyBudgetTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsPrivacyBudgetTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsPrivacyBudgetTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsPrivacyBudgetTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsPrivacyBudgetTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsPrivacyBudgetTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn">MembershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">PrivacyBudgetTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">PrivacyBudgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```csharp
public string MembershipArn { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `PrivacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="PrivacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```csharp
public string PrivacyBudgetTemplateIdentifier { get; }
```

- *Type:* string

---

##### `PrivacyBudgetType`<sup>Required</sup> <a name="PrivacyBudgetType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```csharp
public string PrivacyBudgetType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateConfig <a name="DataAwsccCleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_privacy_budget_template#id DataAwsccCleanroomsPrivacyBudgetTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsPrivacyBudgetTemplateParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateParameters {

};
```


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters {

};
```


### DataAwsccCleanroomsPrivacyBudgetTemplateTags <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```csharp
private DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">Budget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; }
```

- *Type:* string

---

##### `Budget`<sup>Required</sup> <a name="Budget" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```csharp
public double Budget { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">BudgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">Epsilon</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">UsersNoisePerQuery</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetParameters`<sup>Required</sup> <a name="BudgetParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList BudgetParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `Epsilon`<sup>Required</sup> <a name="Epsilon" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```csharp
public double Epsilon { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `UsersNoisePerQuery`<sup>Required</sup> <a name="UsersNoisePerQuery" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```csharp
public double UsersNoisePerQuery { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```csharp
private DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsPrivacyBudgetTemplateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a>

---



