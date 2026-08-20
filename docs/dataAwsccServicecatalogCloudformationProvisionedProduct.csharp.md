# `dataAwsccServicecatalogCloudformationProvisionedProduct` Submodule <a name="`dataAwsccServicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogCloudformationProvisionedProduct <a name="DataAwsccServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProduct(Construct Scope, string Id, DataAwsccServicecatalogCloudformationProvisionedProductConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig">DataAwsccServicecatalogCloudformationProvisionedProductConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig">DataAwsccServicecatalogCloudformationProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProvisionedProduct.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProvisionedProduct.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProvisionedProduct.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogCloudformationProvisionedProduct.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicecatalogCloudformationProvisionedProduct to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">CloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.outputs">Outputs</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathId">PathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathName">PathName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">ProvisionedProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">ProvisionedProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">ProvisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.recordId">RecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList">DataAwsccServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `CloudformationStackArn`<sup>Required</sup> <a name="CloudformationStackArn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```csharp
public string CloudformationStackArn { get; }
```

- *Type:* string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; }
```

- *Type:* string[]

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```csharp
public StringMap Outputs { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```csharp
public string PathId { get; }
```

- *Type:* string

---

##### `PathName`<sup>Required</sup> <a name="PathName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```csharp
public string PathName { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ProvisionedProductId`<sup>Required</sup> <a name="ProvisionedProductId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```csharp
public string ProvisionedProductId { get; }
```

- *Type:* string

---

##### `ProvisionedProductName`<sup>Required</sup> <a name="ProvisionedProductName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```csharp
public string ProvisionedProductName { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```csharp
public string ProvisioningArtifactId { get; }
```

- *Type:* string

---

##### `ProvisioningArtifactName`<sup>Required</sup> <a name="ProvisioningArtifactName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```csharp
public string ProvisioningArtifactName { get; }
```

- *Type:* string

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList ProvisioningParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `ProvisioningPreferences`<sup>Required</sup> <a name="ProvisioningPreferences" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference ProvisioningPreferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `RecordId`<sup>Required</sup> <a name="RecordId" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```csharp
public string RecordId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList">DataAwsccServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogCloudformationProvisionedProductConfig <a name="DataAwsccServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicecatalog_cloudformation_provisioned_product#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters {

};
```


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences {

};
```


### DataAwsccServicecatalogCloudformationProvisionedProductTags <a name="DataAwsccServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```csharp
private DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">StackSetAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">StackSetFailureToleranceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">StackSetOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">StackSetRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackSetAccounts`<sup>Required</sup> <a name="StackSetAccounts" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```csharp
public string[] StackSetAccounts { get; }
```

- *Type:* string[]

---

##### `StackSetFailureToleranceCount`<sup>Required</sup> <a name="StackSetFailureToleranceCount" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```csharp
public double StackSetFailureToleranceCount { get; }
```

- *Type:* double

---

##### `StackSetFailureTolerancePercentage`<sup>Required</sup> <a name="StackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```csharp
public double StackSetFailureTolerancePercentage { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyCount`<sup>Required</sup> <a name="StackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```csharp
public double StackSetMaxConcurrencyCount { get; }
```

- *Type:* double

---

##### `StackSetMaxConcurrencyPercentage`<sup>Required</sup> <a name="StackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```csharp
public double StackSetMaxConcurrencyPercentage { get; }
```

- *Type:* double

---

##### `StackSetOperationType`<sup>Required</sup> <a name="StackSetOperationType" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```csharp
public string StackSetOperationType { get; }
```

- *Type:* string

---

##### `StackSetRegions`<sup>Required</sup> <a name="StackSetRegions" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```csharp
public string[] StackSetRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences">DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### DataAwsccServicecatalogCloudformationProvisionedProductTagsList <a name="DataAwsccServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```csharp
private DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags">DataAwsccServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicecatalogCloudformationProvisionedProductTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogCloudformationProvisionedProduct.DataAwsccServicecatalogCloudformationProvisionedProductTags">DataAwsccServicecatalogCloudformationProvisionedProductTags</a>

---



