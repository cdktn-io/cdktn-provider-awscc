# `dataAwsccBedrockagentcoreHarness` Submodule <a name="`dataAwsccBedrockagentcoreHarness` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreHarness <a name="DataAwsccBedrockagentcoreHarness" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_harness awscc_bedrockagentcore_harness}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarness(Construct Scope, string Id, DataAwsccBedrockagentcoreHarnessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig">DataAwsccBedrockagentcoreHarnessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig">DataAwsccBedrockagentcoreHarnessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarness resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreHarness.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreHarness.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreHarness.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreHarness.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreHarness resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreHarness to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreHarness that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_harness#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreHarness to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.allowedTools">AllowedTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentArtifact">EnvironmentArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessId">HarnessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessName">HarnessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxIterations">MaxIterations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.memory">Memory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference">DataAwsccBedrockagentcoreHarnessMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.model">Model</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference">DataAwsccBedrockagentcoreHarnessModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList">DataAwsccBedrockagentcoreHarnessSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.systemPrompt">SystemPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList">DataAwsccBedrockagentcoreHarnessSystemPromptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList">DataAwsccBedrockagentcoreHarnessTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList">DataAwsccBedrockagentcoreHarnessToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.truncation">Truncation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedTools`<sup>Required</sup> <a name="AllowedTools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.allowedTools"></a>

```csharp
public string[] AllowedTools { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.authorizerConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference AuthorizerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environment"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference</a>

---

##### `EnvironmentArtifact`<sup>Required</sup> <a name="EnvironmentArtifact" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentArtifact"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference EnvironmentArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference</a>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `HarnessId`<sup>Required</sup> <a name="HarnessId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessId"></a>

```csharp
public string HarnessId { get; }
```

- *Type:* string

---

##### `HarnessName`<sup>Required</sup> <a name="HarnessName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.harnessName"></a>

```csharp
public string HarnessName { get; }
```

- *Type:* string

---

##### `MaxIterations`<sup>Required</sup> <a name="MaxIterations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxIterations"></a>

```csharp
public double MaxIterations { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.memory"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemoryOutputReference Memory { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference">DataAwsccBedrockagentcoreHarnessMemoryOutputReference</a>

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.model"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelOutputReference Model { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference">DataAwsccBedrockagentcoreHarnessModelOutputReference</a>

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.skills"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessSkillsList Skills { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList">DataAwsccBedrockagentcoreHarnessSkillsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemPrompt`<sup>Required</sup> <a name="SystemPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.systemPrompt"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessSystemPromptList SystemPrompt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList">DataAwsccBedrockagentcoreHarnessSystemPromptList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tags"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList">DataAwsccBedrockagentcoreHarnessTagsList</a>

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tools"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsList Tools { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList">DataAwsccBedrockagentcoreHarnessToolsList</a>

---

##### `Truncation`<sup>Required</sup> <a name="Truncation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.truncation"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationOutputReference Truncation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarness.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration {

};
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer {

};
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {

};
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {

};
```


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {

};
```


### DataAwsccBedrockagentcoreHarnessConfig <a name="DataAwsccBedrockagentcoreHarnessConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_harness#id DataAwsccBedrockagentcoreHarness#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreHarnessEnvironment <a name="DataAwsccBedrockagentcoreHarnessEnvironment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironment {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifact <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifact" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentArtifact {

};
```


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration {

};
```


### DataAwsccBedrockagentcoreHarnessMemory <a name="DataAwsccBedrockagentcoreHarnessMemory" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemory {

};
```


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration {

};
```


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig {

};
```


### DataAwsccBedrockagentcoreHarnessModel <a name="DataAwsccBedrockagentcoreHarnessModel" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModel {

};
```


### DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig {

};
```


### DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig {

};
```


### DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig <a name="DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig {

};
```


### DataAwsccBedrockagentcoreHarnessSkills <a name="DataAwsccBedrockagentcoreHarnessSkills" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSkills {

};
```


### DataAwsccBedrockagentcoreHarnessSystemPrompt <a name="DataAwsccBedrockagentcoreHarnessSystemPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSystemPrompt {

};
```


### DataAwsccBedrockagentcoreHarnessTags <a name="DataAwsccBedrockagentcoreHarnessTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTags {

};
```


### DataAwsccBedrockagentcoreHarnessTools <a name="DataAwsccBedrockagentcoreHarnessTools" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTools {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfig <a name="DataAwsccBedrockagentcoreHarnessToolsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfig {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction <a name="DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction {

};
```


### DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp <a name="DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp {

};
```


### DataAwsccBedrockagentcoreHarnessTruncation <a name="DataAwsccBedrockagentcoreHarnessTruncation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncation {

};
```


### DataAwsccBedrockagentcoreHarnessTruncationConfig <a name="DataAwsccBedrockagentcoreHarnessTruncationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfig {

};
```


### DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow {

};
```


### DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```csharp
public string MatchValueString { get; }
```

- *Type:* string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```csharp
public string[] MatchValueStringList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```csharp
public string ClaimMatchOperator { get; }
```

- *Type:* string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference ClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference AuthorizingClaimMatchValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```csharp
public string InboundTokenClaimName { get; }
```

- *Type:* string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```csharp
public string InboundTokenClaimValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```csharp
public string[] AllowedAudience { get; }
```

- *Type:* string[]

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; }
```

- *Type:* string[]

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```csharp
public string[] AllowedScopes { get; }
```

- *Type:* string[]

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList CustomClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration">DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference CustomJwtAuthorizer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration">DataAwsccBedrockagentcoreHarnessAuthorizerConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage">SessionStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionStorage`<sup>Required</sup> <a name="SessionStorage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.sessionStorage"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference SessionStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurations</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsSessionStorage</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout">IdleRuntimeSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime">MaxLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleRuntimeSessionTimeout`<sup>Required</sup> <a name="IdleRuntimeSessionTimeout" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.idleRuntimeSessionTimeout"></a>

```csharp
public double IdleRuntimeSessionTimeout { get; }
```

- *Type:* double

---

##### `MaxLifetime`<sup>Required</sup> <a name="MaxLifetime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.maxLifetime"></a>

```csharp
public double MaxLifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfig</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `NetworkModeConfig`<sup>Required</sup> <a name="NetworkModeConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference NetworkModeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationNetworkModeConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName">AgentRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations">FilesystemConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeArn"></a>

```csharp
public string AgentRuntimeArn { get; }
```

- *Type:* string

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeId"></a>

```csharp
public string AgentRuntimeId { get; }
```

- *Type:* string

---

##### `AgentRuntimeName`<sup>Required</sup> <a name="AgentRuntimeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.agentRuntimeName"></a>

```csharp
public string AgentRuntimeName { get; }
```

- *Type:* string

---

##### `FilesystemConfigurations`<sup>Required</sup> <a name="FilesystemConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.filesystemConfigurations"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList FilesystemConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentFilesystemConfigurationsList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.lifecycleConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentLifecycleConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.networkConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentNetworkConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironment</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri">ContainerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerUri`<sup>Required</sup> <a name="ContainerUri" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.containerUri"></a>

```csharp
public string ContainerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact">DataAwsccBedrockagentcoreHarnessEnvironmentArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.containerConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentArtifactContainerConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifactOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentArtifact InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentArtifact">DataAwsccBedrockagentcoreHarnessEnvironmentArtifact</a>

---


### DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference <a name="DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment">AgentCoreRuntimeEnvironment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment">DataAwsccBedrockagentcoreHarnessEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreRuntimeEnvironment`<sup>Required</sup> <a name="AgentCoreRuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.agentCoreRuntimeEnvironment"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference AgentCoreRuntimeEnvironment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference">DataAwsccBedrockagentcoreHarnessEnvironmentAgentCoreRuntimeEnvironmentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironmentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessEnvironment">DataAwsccBedrockagentcoreHarnessEnvironment</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId">ActorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount">MessagesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig">RetrievalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.actorId"></a>

```csharp
public string ActorId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.messagesCount"></a>

```csharp
public double MessagesCount { get; }
```

- *Type:* double

---

##### `RetrievalConfig`<sup>Required</sup> <a name="RetrievalConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.retrievalConfig"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap RetrievalConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfiguration</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore">RelevanceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId">StrategyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelevanceScore`<sup>Required</sup> <a name="RelevanceScore" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.relevanceScore"></a>

```csharp
public double RelevanceScore { get; }
```

- *Type:* double

---

##### `StrategyId`<sup>Required</sup> <a name="StrategyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.strategyId"></a>

```csharp
public string StrategyId { get; }
```

- *Type:* string

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationRetrievalConfig</a>

---


### DataAwsccBedrockagentcoreHarnessMemoryOutputReference <a name="DataAwsccBedrockagentcoreHarnessMemoryOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessMemoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration">AgentCoreMemoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory">DataAwsccBedrockagentcoreHarnessMemory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreMemoryConfiguration`<sup>Required</sup> <a name="AgentCoreMemoryConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.agentCoreMemoryConfiguration"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference AgentCoreMemoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference">DataAwsccBedrockagentcoreHarnessMemoryAgentCoreMemoryConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessMemory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessMemory">DataAwsccBedrockagentcoreHarnessMemory</a>

---


### DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn">ApiKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyArn`<sup>Required</sup> <a name="ApiKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.apiKeyArn"></a>

```csharp
public string ApiKeyArn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfig</a>

---


### DataAwsccBedrockagentcoreHarnessModelOutputReference <a name="DataAwsccBedrockagentcoreHarnessModelOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig">BedrockModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig">GeminiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig">OpenAiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel">DataAwsccBedrockagentcoreHarnessModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BedrockModelConfig`<sup>Required</sup> <a name="BedrockModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.bedrockModelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference BedrockModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelBedrockModelConfigOutputReference</a>

---

##### `GeminiModelConfig`<sup>Required</sup> <a name="GeminiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.geminiModelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference GeminiModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelGeminiModelConfigOutputReference</a>

---

##### `OpenAiModelConfig`<sup>Required</sup> <a name="OpenAiModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.openAiModelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference OpenAiModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference">DataAwsccBedrockagentcoreHarnessModelOpenAiModelConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModelOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessModel InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessModel">DataAwsccBedrockagentcoreHarnessModel</a>

---


### DataAwsccBedrockagentcoreHarnessSkillsList <a name="DataAwsccBedrockagentcoreHarnessSkillsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSkillsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessSkillsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessSkillsOutputReference <a name="DataAwsccBedrockagentcoreHarnessSkillsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSkillsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills">DataAwsccBedrockagentcoreHarnessSkills</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkillsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessSkills InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSkills">DataAwsccBedrockagentcoreHarnessSkills</a>

---


### DataAwsccBedrockagentcoreHarnessSystemPromptList <a name="DataAwsccBedrockagentcoreHarnessSystemPromptList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSystemPromptList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference <a name="DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt">DataAwsccBedrockagentcoreHarnessSystemPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPromptOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessSystemPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessSystemPrompt">DataAwsccBedrockagentcoreHarnessSystemPrompt</a>

---


### DataAwsccBedrockagentcoreHarnessTagsList <a name="DataAwsccBedrockagentcoreHarnessTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessTagsOutputReference <a name="DataAwsccBedrockagentcoreHarnessTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags">DataAwsccBedrockagentcoreHarnessTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTags">DataAwsccBedrockagentcoreHarnessTags</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn">BrowserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.browserArn"></a>

```csharp
public string BrowserArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowser</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreter</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters">CustomParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl">DefaultReturnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn">ProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomParameters`<sup>Required</sup> <a name="CustomParameters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.customParameters"></a>

```csharp
public StringMap CustomParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DefaultReturnUrl`<sup>Required</sup> <a name="DefaultReturnUrl" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.defaultReturnUrl"></a>

```csharp
public string DefaultReturnUrl { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `ProviderArn`<sup>Required</sup> <a name="ProviderArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.providerArn"></a>

```csharp
public string ProviderArn { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauth</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam">AwsIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIam`<sup>Required</sup> <a name="AwsIam" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.awsIam"></a>

```csharp
public string AwsIam { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.oauth"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference Oauth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOauthOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuth</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth">OutboundAuth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `OutboundAuth`<sup>Required</sup> <a name="OutboundAuth" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.outboundAuth"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference OutboundAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutboundAuthOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGateway</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunction</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser">AgentCoreBrowser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter">AgentCoreCodeInterpreter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway">AgentCoreGateway</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction">InlineFunction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp">RemoteMcp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig">DataAwsccBedrockagentcoreHarnessToolsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCoreBrowser`<sup>Required</sup> <a name="AgentCoreBrowser" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreBrowser"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference AgentCoreBrowser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreBrowserOutputReference</a>

---

##### `AgentCoreCodeInterpreter`<sup>Required</sup> <a name="AgentCoreCodeInterpreter" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreCodeInterpreter"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference AgentCoreCodeInterpreter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreCodeInterpreterOutputReference</a>

---

##### `AgentCoreGateway`<sup>Required</sup> <a name="AgentCoreGateway" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.agentCoreGateway"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference AgentCoreGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigAgentCoreGatewayOutputReference</a>

---

##### `InlineFunction`<sup>Required</sup> <a name="InlineFunction" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.inlineFunction"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference InlineFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigInlineFunctionOutputReference</a>

---

##### `RemoteMcp`<sup>Required</sup> <a name="RemoteMcp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.remoteMcp"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference RemoteMcp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfig">DataAwsccBedrockagentcoreHarnessToolsConfig</a>

---


### DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers">Headers</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.headers"></a>

```csharp
public StringMap Headers { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp">DataAwsccBedrockagentcoreHarnessToolsConfigRemoteMcp</a>

---


### DataAwsccBedrockagentcoreHarnessToolsList <a name="DataAwsccBedrockagentcoreHarnessToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreHarnessToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreHarnessToolsOutputReference <a name="DataAwsccBedrockagentcoreHarnessToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools">DataAwsccBedrockagentcoreHarnessTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.config"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference">DataAwsccBedrockagentcoreHarnessToolsConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessToolsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTools">DataAwsccBedrockagentcoreHarnessTools</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow">SlidingWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization">Summarization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig">DataAwsccBedrockagentcoreHarnessTruncationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SlidingWindow`<sup>Required</sup> <a name="SlidingWindow" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.slidingWindow"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference SlidingWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference</a>

---

##### `Summarization`<sup>Required</sup> <a name="Summarization" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.summarization"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference Summarization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfig">DataAwsccBedrockagentcoreHarnessTruncationConfig</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount">MessagesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessagesCount`<sup>Required</sup> <a name="MessagesCount" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.messagesCount"></a>

```csharp
public double MessagesCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow">DataAwsccBedrockagentcoreHarnessTruncationConfigSlidingWindow</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages">PreserveRecentMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt">SummarizationSystemPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio">SummaryRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreserveRecentMessages`<sup>Required</sup> <a name="PreserveRecentMessages" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.preserveRecentMessages"></a>

```csharp
public double PreserveRecentMessages { get; }
```

- *Type:* double

---

##### `SummarizationSystemPrompt`<sup>Required</sup> <a name="SummarizationSystemPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summarizationSystemPrompt"></a>

```csharp
public string SummarizationSystemPrompt { get; }
```

- *Type:* string

---

##### `SummaryRatio`<sup>Required</sup> <a name="SummaryRatio" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.summaryRatio"></a>

```csharp
public double SummaryRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarizationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization">DataAwsccBedrockagentcoreHarnessTruncationConfigSummarization</a>

---


### DataAwsccBedrockagentcoreHarnessTruncationOutputReference <a name="DataAwsccBedrockagentcoreHarnessTruncationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreHarnessTruncationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation">DataAwsccBedrockagentcoreHarnessTruncation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.config"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference">DataAwsccBedrockagentcoreHarnessTruncationConfigOutputReference</a>

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreHarnessTruncation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreHarness.DataAwsccBedrockagentcoreHarnessTruncation">DataAwsccBedrockagentcoreHarnessTruncation</a>

---



