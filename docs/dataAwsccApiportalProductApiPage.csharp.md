# `dataAwsccApiportalProductApiPage` Submodule <a name="`dataAwsccApiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalProductApiPage <a name="DataAwsccApiportalProductApiPage" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPage(Construct Scope, string Id, DataAwsccApiportalProductApiPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig">DataAwsccApiportalProductApiPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig">DataAwsccApiportalProductApiPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalProductApiPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalProductApiPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalProductApiPage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalProductApiPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApiportalProductApiPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId">ApiId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent">DisplayContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId">ManagedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn">ProductApiPageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId">ProductApiPageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException">StatusException</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState">TryItState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId"></a>

```csharp
public DataAwsccApiportalProductApiPageApiIdOutputReference ApiId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a>

---

##### `DisplayContent`<sup>Required</sup> <a name="DisplayContent" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent"></a>

```csharp
public DataAwsccApiportalProductApiPageDisplayContentOutputReference DisplayContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `ManagedApiId`<sup>Required</sup> <a name="ManagedApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId"></a>

```csharp
public string ManagedApiId { get; }
```

- *Type:* string

---

##### `ProductApiPageArn`<sup>Required</sup> <a name="ProductApiPageArn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn"></a>

```csharp
public string ProductApiPageArn { get; }
```

- *Type:* string

---

##### `ProductApiPageId`<sup>Required</sup> <a name="ProductApiPageId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId"></a>

```csharp
public string ProductApiPageId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusException`<sup>Required</sup> <a name="StatusException" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException"></a>

```csharp
public DataAwsccApiportalProductApiPageStatusExceptionOutputReference StatusException { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags"></a>

```csharp
public DataAwsccApiportalProductApiPageTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a>

---

##### `TryItState`<sup>Required</sup> <a name="TryItState" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState"></a>

```csharp
public string TryItState { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalProductApiPageApiId <a name="DataAwsccApiportalProductApiPageApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageApiId {

};
```


### DataAwsccApiportalProductApiPageApiIdIdentifierParts <a name="DataAwsccApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageApiIdIdentifierParts {

};
```


### DataAwsccApiportalProductApiPageConfig <a name="DataAwsccApiportalProductApiPageConfig" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#id DataAwsccApiportalProductApiPage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalProductApiPageDisplayContent <a name="DataAwsccApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageDisplayContent {

};
```


### DataAwsccApiportalProductApiPageDisplayContentOverrides <a name="DataAwsccApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageDisplayContentOverrides {

};
```


### DataAwsccApiportalProductApiPageStatusException <a name="DataAwsccApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageStatusException {

};
```


### DataAwsccApiportalProductApiPageTags <a name="DataAwsccApiportalProductApiPageTags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageApiIdIdentifierParts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a>

---


### DataAwsccApiportalProductApiPageApiIdOutputReference <a name="DataAwsccApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageApiIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts">IdentifierParts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierParts`<sup>Required</sup> <a name="IdentifierParts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```csharp
public DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference IdentifierParts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageApiId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageDisplayContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```csharp
public DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference Overrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageDisplayContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageDisplayContentOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a>

---


### DataAwsccApiportalProductApiPageStatusExceptionOutputReference <a name="DataAwsccApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageStatusExceptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception">Exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exception`<sup>Required</sup> <a name="Exception" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```csharp
public string Exception { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageStatusException InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a>

---


### DataAwsccApiportalProductApiPageTagsList <a name="DataAwsccApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get"></a>

```csharp
private DataAwsccApiportalProductApiPageTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApiportalProductApiPageTagsOutputReference <a name="DataAwsccApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalProductApiPageTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalProductApiPageTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a>

---



