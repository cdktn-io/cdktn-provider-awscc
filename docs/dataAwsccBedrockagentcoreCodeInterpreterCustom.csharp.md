# `dataAwsccBedrockagentcoreCodeInterpreterCustom` Submodule <a name="`dataAwsccBedrockagentcoreCodeInterpreterCustom` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustom <a name="DataAwsccBedrockagentcoreCodeInterpreterCustom" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_code_interpreter_custom awscc_bedrockagentcore_code_interpreter_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustom(Construct Scope, string Id, DataAwsccBedrockagentcoreCodeInterpreterCustomConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreCodeInterpreterCustom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreCodeInterpreterCustom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreCodeInterpreterCustom.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreCodeInterpreterCustom.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreCodeInterpreterCustom to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreCodeInterpreterCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_code_interpreter_custom#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreCodeInterpreterCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId">CodeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.certificates"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList</a>

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; }
```

- *Type:* string

---

##### `CodeInterpreterId`<sup>Required</sup> <a name="CodeInterpreterId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId"></a>

```csharp
public string CodeInterpreterId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.networkConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates {

};
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation {

};
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomConfig <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrockagentcore_code_interpreter_custom#id DataAwsccBedrockagentcoreCodeInterpreterCustom#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration {

};
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get"></a>

```csharp
private DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateLocation`<sup>Required</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference CertificateLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---



