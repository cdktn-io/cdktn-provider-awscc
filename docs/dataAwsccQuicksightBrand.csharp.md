# `dataAwsccQuicksightBrand` Submodule <a name="`dataAwsccQuicksightBrand` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightBrand <a name="DataAwsccQuicksightBrand" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand awscc_quicksight_brand}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrand(Construct Scope, string Id, DataAwsccQuicksightBrandConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig">DataAwsccQuicksightBrandConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig">DataAwsccQuicksightBrandConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightBrand.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightBrand.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightBrand.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightBrand.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightBrand to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightBrand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightBrand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition">BrandDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus">BrandStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus">VersionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `BrandDefinition`<sup>Required</sup> <a name="BrandDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionOutputReference BrandDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a>

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `BrandStatus`<sup>Required</sup> <a name="BrandStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus"></a>

```csharp
public string BrandStatus { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags"></a>

```csharp
public DataAwsccQuicksightBrandTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `VersionStatus`<sup>Required</sup> <a name="VersionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus"></a>

```csharp
public string VersionStatus { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightBrandBrandDefinition <a name="DataAwsccQuicksightBrandBrandDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinition {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationTheme <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationTheme {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar {

};
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar {

};
```


### DataAwsccQuicksightBrandConfig <a name="DataAwsccQuicksightBrandConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/quicksight_brand#id DataAwsccQuicksightBrand#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightBrandTags <a name="DataAwsccQuicksightBrandTags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent">Accent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger">Danger</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure">Measure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success">Success</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning">Warning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accent`<sup>Required</sup> <a name="Accent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference Accent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a>

---

##### `Danger`<sup>Required</sup> <a name="Danger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference Danger { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a>

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference Info { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a>

---

##### `Measure`<sup>Required</sup> <a name="Measure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference Measure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference Secondary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a>

---

##### `Success`<sup>Required</sup> <a name="Success" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference Success { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a>

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference Warning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground">Foreground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `Foreground`<sup>Required</sup> <a name="Foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground"></a>

```csharp
public string Foreground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar">ContextualNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar">GlobalNavbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextualNavbar`<sup>Required</sup> <a name="ContextualNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference ContextualNavbar { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a>

---

##### `GlobalNavbar`<sup>Required</sup> <a name="GlobalNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference GlobalNavbar { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle">NavbarStyle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NavbarStyle`<sup>Required</sup> <a name="NavbarStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference NavbarStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette">BrandColorPalette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle">BrandElementStyle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrandColorPalette`<sup>Required</sup> <a name="BrandColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference BrandColorPalette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a>

---

##### `BrandElementStyle`<sup>Required</sup> <a name="BrandElementStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference BrandElementStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationTheme InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a>

---


### DataAwsccQuicksightBrandBrandDefinitionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandBrandDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme">ApplicationTheme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName">BrandName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationTheme`<sup>Required</sup> <a name="ApplicationTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference ApplicationTheme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a>

---

##### `BrandName`<sup>Required</sup> <a name="BrandName" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName"></a>

```csharp
public string BrandName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandBrandDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a>

---


### DataAwsccQuicksightBrandTagsList <a name="DataAwsccQuicksightBrandTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get"></a>

```csharp
private DataAwsccQuicksightBrandTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightBrandTagsOutputReference <a name="DataAwsccQuicksightBrandTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightBrandTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightBrandTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a>

---



