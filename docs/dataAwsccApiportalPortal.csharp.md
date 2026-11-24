# `dataAwsccApiportalPortal` Submodule <a name="`dataAwsccApiportalPortal` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalPortal <a name="DataAwsccApiportalPortal" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortal(Construct Scope, string Id, DataAwsccApiportalPortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig">DataAwsccApiportalPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig">DataAwsccApiportalPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalPortal.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApiportalPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApiportalPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference">DataAwsccApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference">DataAwsccApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.includedProductArns">IncludedProductArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.logoUri">LogoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalArn">PortalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalContent">PortalContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference">DataAwsccApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalId">PortalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishDescription">PublishDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishedAt">PublishedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishStatus">PublishStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.rumAppMonitorName">RumAppMonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.statusException">StatusException</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference">DataAwsccApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList">DataAwsccApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.authorization"></a>

```csharp
public DataAwsccApiportalPortalAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference">DataAwsccApiportalPortalAuthorizationOutputReference</a>

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.endpointConfiguration"></a>

```csharp
public DataAwsccApiportalPortalEndpointConfigurationOutputReference EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference">DataAwsccApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `IncludedProductArns`<sup>Required</sup> <a name="IncludedProductArns" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.includedProductArns"></a>

```csharp
public string[] IncludedProductArns { get; }
```

- *Type:* string[]

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.logoUri"></a>

```csharp
public string LogoUri { get; }
```

- *Type:* string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalArn"></a>

```csharp
public string PortalArn { get; }
```

- *Type:* string

---

##### `PortalContent`<sup>Required</sup> <a name="PortalContent" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalContent"></a>

```csharp
public DataAwsccApiportalPortalPortalContentOutputReference PortalContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference">DataAwsccApiportalPortalPortalContentOutputReference</a>

---

##### `PortalId`<sup>Required</sup> <a name="PortalId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalId"></a>

```csharp
public string PortalId { get; }
```

- *Type:* string

---

##### `PublishDescription`<sup>Required</sup> <a name="PublishDescription" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishDescription"></a>

```csharp
public string PublishDescription { get; }
```

- *Type:* string

---

##### `PublishedAt`<sup>Required</sup> <a name="PublishedAt" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishedAt"></a>

```csharp
public string PublishedAt { get; }
```

- *Type:* string

---

##### `PublishStatus`<sup>Required</sup> <a name="PublishStatus" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishStatus"></a>

```csharp
public string PublishStatus { get; }
```

- *Type:* string

---

##### `RumAppMonitorName`<sup>Required</sup> <a name="RumAppMonitorName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.rumAppMonitorName"></a>

```csharp
public string RumAppMonitorName { get; }
```

- *Type:* string

---

##### `StatusException`<sup>Required</sup> <a name="StatusException" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.statusException"></a>

```csharp
public DataAwsccApiportalPortalStatusExceptionOutputReference StatusException { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference">DataAwsccApiportalPortalStatusExceptionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tags"></a>

```csharp
public DataAwsccApiportalPortalTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList">DataAwsccApiportalPortalTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalPortalAuthorization <a name="DataAwsccApiportalPortalAuthorization" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorization {

};
```


### DataAwsccApiportalPortalAuthorizationAuthorizationConfig <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorizationAuthorizationConfig {

};
```


### DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig {

};
```


### DataAwsccApiportalPortalConfig <a name="DataAwsccApiportalPortalConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#id DataAwsccApiportalPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalPortalEndpointConfiguration <a name="DataAwsccApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalEndpointConfiguration {

};
```


### DataAwsccApiportalPortalEndpointConfigurationAcmManaged <a name="DataAwsccApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalEndpointConfigurationAcmManaged {

};
```


### DataAwsccApiportalPortalPortalContent <a name="DataAwsccApiportalPortalPortalContent" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContent {

};
```


### DataAwsccApiportalPortalPortalContentTheme <a name="DataAwsccApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContentTheme {

};
```


### DataAwsccApiportalPortalPortalContentThemeCustomColors <a name="DataAwsccApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContentThemeCustomColors {

};
```


### DataAwsccApiportalPortalStatusException <a name="DataAwsccApiportalPortalStatusException" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalStatusException {

};
```


### DataAwsccApiportalPortalTags <a name="DataAwsccApiportalPortalTags" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```csharp
public string AppClientId { get; }
```

- *Type:* string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```csharp
public string UserPoolDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CognitoConfig`<sup>Required</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```csharp
public DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference CognitoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalAuthorizationAuthorizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfig</a>

---


### DataAwsccApiportalPortalAuthorizationOutputReference <a name="DataAwsccApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.authorizationConfig">AuthorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">FineGrainedAccessControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization">DataAwsccApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationConfig`<sup>Required</sup> <a name="AuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```csharp
public DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference AuthorizationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `FineGrainedAccessControl`<sup>Required</sup> <a name="FineGrainedAccessControl" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```csharp
public string FineGrainedAccessControl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization">DataAwsccApiportalPortalAuthorization</a>

---


### DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged">DataAwsccApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalEndpointConfigurationAcmManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged">DataAwsccApiportalPortalEndpointConfigurationAcmManaged</a>

---


### DataAwsccApiportalPortalEndpointConfigurationOutputReference <a name="DataAwsccApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">AcmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference">DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.none">None</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">PortalDefaultDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">PortalDomainHostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration">DataAwsccApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcmManaged`<sup>Required</sup> <a name="AcmManaged" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```csharp
public DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference AcmManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference">DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```csharp
public string None { get; }
```

- *Type:* string

---

##### `PortalDefaultDomainName`<sup>Required</sup> <a name="PortalDefaultDomainName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```csharp
public string PortalDefaultDomainName { get; }
```

- *Type:* string

---

##### `PortalDomainHostedZoneId`<sup>Required</sup> <a name="PortalDomainHostedZoneId" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```csharp
public string PortalDomainHostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration">DataAwsccApiportalPortalEndpointConfiguration</a>

---


### DataAwsccApiportalPortalPortalContentOutputReference <a name="DataAwsccApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference">DataAwsccApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent">DataAwsccApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.theme"></a>

```csharp
public DataAwsccApiportalPortalPortalContentThemeOutputReference Theme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference">DataAwsccApiportalPortalPortalContentThemeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalPortalContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent">DataAwsccApiportalPortalPortalContent</a>

---


### DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">AccentColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">ErrorValidationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">HeaderColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">NavigationColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors">DataAwsccApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccentColor`<sup>Required</sup> <a name="AccentColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```csharp
public string AccentColor { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `ErrorValidationColor`<sup>Required</sup> <a name="ErrorValidationColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```csharp
public string ErrorValidationColor { get; }
```

- *Type:* string

---

##### `HeaderColor`<sup>Required</sup> <a name="HeaderColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```csharp
public string HeaderColor { get; }
```

- *Type:* string

---

##### `NavigationColor`<sup>Required</sup> <a name="NavigationColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```csharp
public string NavigationColor { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalPortalContentThemeCustomColors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors">DataAwsccApiportalPortalPortalContentThemeCustomColors</a>

---


### DataAwsccApiportalPortalPortalContentThemeOutputReference <a name="DataAwsccApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalPortalContentThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.customColors">CustomColors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference">DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">LogoUploadedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme">DataAwsccApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomColors`<sup>Required</sup> <a name="CustomColors" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```csharp
public DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference CustomColors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference">DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `LogoUploadedAt`<sup>Required</sup> <a name="LogoUploadedAt" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```csharp
public string LogoUploadedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalPortalContentTheme InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme">DataAwsccApiportalPortalPortalContentTheme</a>

---


### DataAwsccApiportalPortalStatusExceptionOutputReference <a name="DataAwsccApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalStatusExceptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.exception">Exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException">DataAwsccApiportalPortalStatusException</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exception`<sup>Required</sup> <a name="Exception" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```csharp
public string Exception { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalStatusException InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException">DataAwsccApiportalPortalStatusException</a>

---


### DataAwsccApiportalPortalTagsList <a name="DataAwsccApiportalPortalTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get"></a>

```csharp
private DataAwsccApiportalPortalTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApiportalPortalTagsOutputReference <a name="DataAwsccApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApiportalPortalTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags">DataAwsccApiportalPortalTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApiportalPortalTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags">DataAwsccApiportalPortalTags</a>

---



