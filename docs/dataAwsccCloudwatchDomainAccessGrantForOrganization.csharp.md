# `dataAwsccCloudwatchDomainAccessGrantForOrganization` Submodule <a name="`dataAwsccCloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganization <a name="DataAwsccCloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganization(Construct Scope, string Id, DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig">DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig">DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudwatchDomainAccessGrantForOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudwatchDomainAccessGrantForOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudwatchDomainAccessGrantForOrganization.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudwatchDomainAccessGrantForOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudwatchDomainAccessGrantForOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantType">GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList">DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `GrantType`<sup>Required</sup> <a name="GrantType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```csharp
public string GrantType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList">DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/cloudwatch_domain_access_grant_for_organization#id DataAwsccCloudwatchDomainAccessGrantForOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal {

};
```


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes {

};
```


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTags <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">PrincipalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalAttributes`<sup>Required</sup> <a name="PrincipalAttributes" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList PrincipalAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```csharp
private DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">DataAwsccCloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```csharp
private DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags">DataAwsccCloudwatchDomainAccessGrantForOrganizationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudwatchDomainAccessGrantForOrganizationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchDomainAccessGrantForOrganization.DataAwsccCloudwatchDomainAccessGrantForOrganizationTags">DataAwsccCloudwatchDomainAccessGrantForOrganizationTags</a>

---



