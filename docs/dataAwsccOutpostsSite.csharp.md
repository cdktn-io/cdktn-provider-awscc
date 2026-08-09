# `dataAwsccOutpostsSite` Submodule <a name="`dataAwsccOutpostsSite` Submodule" id="@cdktn/provider-awscc.dataAwsccOutpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOutpostsSite <a name="DataAwsccOutpostsSite" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSite(Construct Scope, string Id, DataAwsccOutpostsSiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig">DataAwsccOutpostsSiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig">DataAwsccOutpostsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOutpostsSite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOutpostsSite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOutpostsSite.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOutpostsSite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOutpostsSite resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOutpostsSite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.operatingAddress">OperatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference">DataAwsccOutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.rackPhysicalProperties">RackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference">DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference">DataAwsccOutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.siteArn">SiteArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList">DataAwsccOutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `OperatingAddress`<sup>Required</sup> <a name="OperatingAddress" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.operatingAddress"></a>

```csharp
public DataAwsccOutpostsSiteOperatingAddressOutputReference OperatingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference">DataAwsccOutpostsSiteOperatingAddressOutputReference</a>

---

##### `RackPhysicalProperties`<sup>Required</sup> <a name="RackPhysicalProperties" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.rackPhysicalProperties"></a>

```csharp
public DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference RackPhysicalProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference">DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `ShippingAddress`<sup>Required</sup> <a name="ShippingAddress" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.shippingAddress"></a>

```csharp
public DataAwsccOutpostsSiteShippingAddressOutputReference ShippingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference">DataAwsccOutpostsSiteShippingAddressOutputReference</a>

---

##### `SiteArn`<sup>Required</sup> <a name="SiteArn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.siteArn"></a>

```csharp
public string SiteArn { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.tags"></a>

```csharp
public DataAwsccOutpostsSiteTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList">DataAwsccOutpostsSiteTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOutpostsSiteConfig <a name="DataAwsccOutpostsSiteConfig" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/outposts_site#id DataAwsccOutpostsSite#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOutpostsSiteOperatingAddress <a name="DataAwsccOutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteOperatingAddress {

};
```


### DataAwsccOutpostsSiteRackPhysicalProperties <a name="DataAwsccOutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteRackPhysicalProperties {

};
```


### DataAwsccOutpostsSiteShippingAddress <a name="DataAwsccOutpostsSiteShippingAddress" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteShippingAddress {

};
```


### DataAwsccOutpostsSiteTags <a name="DataAwsccOutpostsSiteTags" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOutpostsSiteOperatingAddressOutputReference <a name="DataAwsccOutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteOperatingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.municipality">Municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddress">DataAwsccOutpostsSiteOperatingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; }
```

- *Type:* string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```csharp
public string Municipality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOutpostsSiteOperatingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteOperatingAddress">DataAwsccOutpostsSiteOperatingAddress</a>

---


### DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference <a name="DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">FiberOpticCableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">MaximumSupportedWeightLbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">OpticalStandard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">PowerConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">PowerDrawKva</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">PowerFeedDrop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">PowerPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">UplinkCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">UplinkGbps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalProperties">DataAwsccOutpostsSiteRackPhysicalProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FiberOpticCableType`<sup>Required</sup> <a name="FiberOpticCableType" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```csharp
public string FiberOpticCableType { get; }
```

- *Type:* string

---

##### `MaximumSupportedWeightLbs`<sup>Required</sup> <a name="MaximumSupportedWeightLbs" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```csharp
public string MaximumSupportedWeightLbs { get; }
```

- *Type:* string

---

##### `OpticalStandard`<sup>Required</sup> <a name="OpticalStandard" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```csharp
public string OpticalStandard { get; }
```

- *Type:* string

---

##### `PowerConnector`<sup>Required</sup> <a name="PowerConnector" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```csharp
public string PowerConnector { get; }
```

- *Type:* string

---

##### `PowerDrawKva`<sup>Required</sup> <a name="PowerDrawKva" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```csharp
public string PowerDrawKva { get; }
```

- *Type:* string

---

##### `PowerFeedDrop`<sup>Required</sup> <a name="PowerFeedDrop" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```csharp
public string PowerFeedDrop { get; }
```

- *Type:* string

---

##### `PowerPhase`<sup>Required</sup> <a name="PowerPhase" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```csharp
public string PowerPhase { get; }
```

- *Type:* string

---

##### `UplinkCount`<sup>Required</sup> <a name="UplinkCount" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```csharp
public string UplinkCount { get; }
```

- *Type:* string

---

##### `UplinkGbps`<sup>Required</sup> <a name="UplinkGbps" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```csharp
public string UplinkGbps { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOutpostsSiteRackPhysicalProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteRackPhysicalProperties">DataAwsccOutpostsSiteRackPhysicalProperties</a>

---


### DataAwsccOutpostsSiteShippingAddressOutputReference <a name="DataAwsccOutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteShippingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.municipality">Municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddress">DataAwsccOutpostsSiteShippingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; }
```

- *Type:* string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```csharp
public string Municipality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOutpostsSiteShippingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteShippingAddress">DataAwsccOutpostsSiteShippingAddress</a>

---


### DataAwsccOutpostsSiteTagsList <a name="DataAwsccOutpostsSiteTagsList" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.get"></a>

```csharp
private DataAwsccOutpostsSiteTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOutpostsSiteTagsOutputReference <a name="DataAwsccOutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOutpostsSiteTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTags">DataAwsccOutpostsSiteTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOutpostsSiteTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOutpostsSite.DataAwsccOutpostsSiteTags">DataAwsccOutpostsSiteTags</a>

---



