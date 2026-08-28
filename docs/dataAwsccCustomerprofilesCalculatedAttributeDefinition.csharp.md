# `dataAwsccCustomerprofilesCalculatedAttributeDefinition` Submodule <a name="`dataAwsccCustomerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinition <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinition(Construct Scope, string Id, DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesCalculatedAttributeDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesCalculatedAttributeDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesCalculatedAttributeDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCustomerprofilesCalculatedAttributeDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">AttributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">CalculatedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.readiness">Readiness</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">UseHistoricalData</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AttributeDetails`<sup>Required</sup> <a name="AttributeDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference AttributeDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `CalculatedAttributeName`<sup>Required</sup> <a name="CalculatedAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```csharp
public string CalculatedAttributeName { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Readiness`<sup>Required</sup> <a name="Readiness" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference Readiness { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `UseHistoricalData`<sup>Required</sup> <a name="UseHistoricalData" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```csharp
public IResolvable UseHistoricalData { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/customerprofiles_calculated_attribute_definition#id DataAwsccCustomerprofilesCalculatedAttributeDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness {

};
```


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```csharp
private DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails">DataAwsccCustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">ObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```csharp
public double ObjectCount { get; }
```

- *Type:* double

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference Threshold { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditions</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">TimestampSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TimestampSource`<sup>Required</sup> <a name="TimestampSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```csharp
public string TimestampSource { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference ValueRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">DataAwsccCustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">ProgressPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProgressPercentage`<sup>Required</sup> <a name="ProgressPercentage" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```csharp
public double ProgressPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness">DataAwsccCustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```csharp
private DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesCalculatedAttributeDefinition.DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags">DataAwsccCustomerprofilesCalculatedAttributeDefinitionTags</a>

---



