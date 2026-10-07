# `dataAwsccRedshiftRedshiftIdcApplication` Submodule <a name="`dataAwsccRedshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftRedshiftIdcApplication <a name="DataAwsccRedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplication(Construct Scope, string Id, DataAwsccRedshiftRedshiftIdcApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig">DataAwsccRedshiftRedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig">DataAwsccRedshiftRedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftRedshiftIdcApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftRedshiftIdcApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftRedshiftIdcApplication.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftRedshiftIdcApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftRedshiftIdcApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcOnboardStatus">IdcOnboardStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.serviceIntegrations">ServiceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.ssoTagKeys">SsoTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList">DataAwsccRedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `AuthorizedTokenIssuerList`<sup>Required</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList AuthorizedTokenIssuerList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```csharp
public string IdcDisplayName { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```csharp
public string IdcManagedApplicationArn { get; }
```

- *Type:* string

---

##### `IdcOnboardStatus`<sup>Required</sup> <a name="IdcOnboardStatus" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```csharp
public string IdcOnboardStatus { get; }
```

- *Type:* string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```csharp
public string IdentityNamespace { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```csharp
public string RedshiftIdcApplicationArn { get; }
```

- *Type:* string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```csharp
public string RedshiftIdcApplicationName { get; }
```

- *Type:* string

---

##### `ServiceIntegrations`<sup>Required</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList ServiceIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `SsoTagKeys`<sup>Required</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```csharp
public string[] SsoTagKeys { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tags"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList">DataAwsccRedshiftRedshiftIdcApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationConfig <a name="DataAwsccRedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#id DataAwsccRedshiftRedshiftIdcApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess {

};
```


### DataAwsccRedshiftRedshiftIdcApplicationTags <a name="DataAwsccRedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```csharp
public string[] AuthorizedAudiencesList { get; }
```

- *Type:* string[]

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```csharp
public string TrustedTokenIssuerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference LakeFormationQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList LakeFormation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList Redshift { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList S3AccessGrants { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference Connect { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference ReadWriteAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationTagsList <a name="DataAwsccRedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get"></a>

```csharp
private DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags">DataAwsccRedshiftRedshiftIdcApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftRedshiftIdcApplicationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags">DataAwsccRedshiftRedshiftIdcApplicationTags</a>

---



