# `dataAwsccServicecatalogCloudformationProduct` Submodule <a name="`dataAwsccServicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogCloudformationProduct <a name="DataAwsccServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProduct(Construct Scope, string Id, DataAwsccServicecatalogCloudformationProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig">DataAwsccServicecatalogCloudformationProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig">DataAwsccServicecatalogCloudformationProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProduct.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cloudformationProductId">CloudformationProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.distributor">Distributor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productType">ProductType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactIds">ProvisioningArtifactIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactNames">ProvisioningArtifactNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactParameters">ProvisioningArtifactParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">ReplaceProvisioningArtifacts</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.sourceConnection">SourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportDescription">SupportDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportEmail">SupportEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList">DataAwsccServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `CloudformationProductId`<sup>Required</sup> <a name="CloudformationProductId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```csharp
public string CloudformationProductId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Distributor`<sup>Required</sup> <a name="Distributor" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.distributor"></a>

```csharp
public string Distributor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.productType"></a>

```csharp
public string ProductType { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactIds`<sup>Required</sup> <a name="ProvisioningArtifactIds" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```csharp
public string ProvisioningArtifactIds { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactNames`<sup>Required</sup> <a name="ProvisioningArtifactNames" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```csharp
public string ProvisioningArtifactNames { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactParameters`<sup>Required</sup> <a name="ProvisioningArtifactParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList ProvisioningArtifactParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `ReplaceProvisioningArtifacts`<sup>Required</sup> <a name="ReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```csharp
public IResolvable ReplaceProvisioningArtifacts { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SourceConnection`<sup>Required</sup> <a name="SourceConnection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.sourceConnection"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference SourceConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `SupportDescription`<sup>Required</sup> <a name="SupportDescription" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportDescription"></a>

```csharp
public string SupportDescription { get; }
```

- *Type:* string

---

##### `SupportEmail`<sup>Required</sup> <a name="SupportEmail" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportEmail"></a>

```csharp
public string SupportEmail { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tags"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList">DataAwsccServicecatalogCloudformationProductTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogCloudformationProductConfig <a name="DataAwsccServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_cloudformation_product#id DataAwsccServicecatalogCloudformationProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters {

};
```


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo {

};
```


### DataAwsccServicecatalogCloudformationProductSourceConnection <a name="DataAwsccServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnection {

};
```


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters {

};
```


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar {

};
```


### DataAwsccServicecatalogCloudformationProductTags <a name="DataAwsccServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">ImportFromPhysicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">LoadTemplateFromUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImportFromPhysicalId`<sup>Required</sup> <a name="ImportFromPhysicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```csharp
public string ImportFromPhysicalId { get; }
```

- *Type:* string

---

##### `LoadTemplateFromUrl`<sup>Required</sup> <a name="LoadTemplateFromUrl" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```csharp
public string LoadTemplateFromUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```csharp
private DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">DisableTemplateValidation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">Info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableTemplateValidation`<sup>Required</sup> <a name="DisableTemplateValidation" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```csharp
public IResolvable DisableTemplateValidation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference Info { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters">DataAwsccServicecatalogCloudformationProductProvisioningArtifactParameters</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">ArtifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactPath`<sup>Required</sup> <a name="ArtifactPath" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```csharp
public string ArtifactPath { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">CodeStar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeStar`<sup>Required</sup> <a name="CodeStar" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference CodeStar { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---


### DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference <a name="DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">ConnectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection">DataAwsccServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionParameters`<sup>Required</sup> <a name="ConnectionParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference ConnectionParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">DataAwsccServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductSourceConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductSourceConnection">DataAwsccServicecatalogCloudformationProductSourceConnection</a>

---


### DataAwsccServicecatalogCloudformationProductTagsList <a name="DataAwsccServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get"></a>

```csharp
private DataAwsccServicecatalogCloudformationProductTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccServicecatalogCloudformationProductTagsOutputReference <a name="DataAwsccServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProductTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags">DataAwsccServicecatalogCloudformationProductTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProductTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProduct.DataAwsccServicecatalogCloudformationProductTags">DataAwsccServicecatalogCloudformationProductTags</a>

---



