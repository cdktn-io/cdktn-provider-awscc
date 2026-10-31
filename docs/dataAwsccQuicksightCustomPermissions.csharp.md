# `dataAwsccQuicksightCustomPermissions` Submodule <a name="`dataAwsccQuicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightCustomPermissions <a name="DataAwsccQuicksightCustomPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissions(Construct Scope, string Id, DataAwsccQuicksightCustomPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig">DataAwsccQuicksightCustomPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightCustomPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName">CustomPermissionsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `CustomPermissionsName`<sup>Required</sup> <a name="CustomPermissionsName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName"></a>

```csharp
public string CustomPermissionsName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightCustomPermissionsCapabilities <a name="DataAwsccQuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsCapabilities {

};
```


### DataAwsccQuicksightCustomPermissionsConfig <a name="DataAwsccQuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightCustomPermissionsTags <a name="DataAwsccQuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference <a name="DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">AccessAppsNativeDataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">AddOrRunAnomalyDetectionForAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource">AdobeAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">AmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">AmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">AmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">AmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">Analysis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">ApproveFlowShareRequests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">Apps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">AsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource">AthenaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource">AuroraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">Automate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">BambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase">BedrockManagedKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">BoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase">BoxKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">BuildCalculatedFieldWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">CanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">ChatAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">ComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">ComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">ConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase">ConfluenceKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource">CreateAdobeAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">CreateAndUpdateAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">CreateAndUpdateAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">CreateAndUpdateAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">CreateAndUpdateAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">CreateAndUpdateApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">CreateAndUpdateAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">CreateAndUpdateBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase">CreateAndUpdateBedrockManagedKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">CreateAndUpdateBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase">CreateAndUpdateBoxKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">CreateAndUpdateCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">CreateAndUpdateComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">CreateAndUpdateComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">CreateAndUpdateConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase">CreateAndUpdateConfluenceKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">CreateAndUpdateDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">CreateAndUpdateDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">CreateAndUpdateDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">CreateAndUpdateFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">CreateAndUpdateGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">CreateAndUpdateGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">CreateAndUpdateGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase">CreateAndUpdateGoogleDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">CreateAndUpdateHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">CreateAndUpdateHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase">CreateAndUpdateIdcKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">CreateAndUpdateIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">CreateAndUpdateJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">CreateAndUpdateKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">CreateAndUpdateLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">CreateAndUpdateMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">CreateAndUpdateMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">CreateAndUpdateMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">CreateAndUpdateMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">CreateAndUpdateNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">CreateAndUpdateNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">CreateAndUpdateOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase">CreateAndUpdateOneDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">CreateAndUpdateOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">CreateAndUpdatePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase">CreateAndUpdateQBusinessKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase">CreateAndUpdateS3KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">CreateAndUpdateSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">CreateAndUpdateSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">CreateAndUpdateSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">CreateAndUpdateSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">CreateAndUpdateSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">CreateAndUpdateSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">CreateAndUpdateSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">CreateAndUpdateSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">CreateAndUpdateServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">CreateAndUpdateSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase">CreateAndUpdateSharePointKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">CreateAndUpdateSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">CreateAndUpdateSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">CreateAndUpdateTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">CreateAndUpdateThemes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">CreateAndUpdateThresholdAlerts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase">CreateAndUpdateWebCrawlerKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">CreateAndUpdateZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource">CreateAthenaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource">CreateAuroraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">CreateChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">CreateDashboardExecutiveSummaryWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource">CreateDatabricksDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource">CreateDb2DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource">CreateDenodoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource">CreateDocumentDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource">CreateDremioDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource">CreateDynamoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource">CreateExasolDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource">CreateFileDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource">CreateGitHubDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource">CreateGoogleAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource">CreateGoogleBigQueryDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource">CreateGoogleSheetsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource">CreateImpalaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource">CreateJiraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource">CreateMariaDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource">CreateMongoAtlasDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource">CreateMongoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource">CreateMySqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource">CreateOpenSearchDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource">CreateOracleDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource">CreatePayPalDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource">CreatePostgreSqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource">CreatePrestoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource">CreateRadiantDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource">CreateRdsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource">CreateRedshiftAutoDiscoveredDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource">CreateRedshiftManualDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource">CreateS3AnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource">CreateS3DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource">CreateS3TablesDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource">CreateSalesforceDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource">CreateSapHanaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource">CreateServiceNowDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">CreateSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource">CreateSnowflakeDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">CreateSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource">CreateSparkDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">CreateSpiceDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource">CreateSqlServerDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource">CreateSquareDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource">CreateStarburstDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource">CreateTeradataDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource">CreateTimestreamDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource">CreateTrinoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource">CreateTwitterDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">Dashboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource">DatabricksDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource">Db2DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource">DenodoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource">DocumentDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource">DremioDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource">DynamoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">EditVisualWithQ</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource">ExasolDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">ExportToCsv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">ExportToCsvInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">ExportToExcel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">ExportToExcelInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">ExportToPdf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">ExportToPdfInScheduledReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">FactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource">FileDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">Flow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">GenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">GithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource">GitHubDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource">GoogleAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource">GoogleBigQueryDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">GoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase">GoogleDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource">GoogleSheetsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">HubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">HuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase">IdcKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource">ImpalaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger">InboundEmailTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">IncludeContentInScheduledReportsEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">IntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">InvokeAppsAiInference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">JiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource">JiraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">LinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">ManageSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource">MariaDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">McpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">MondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource">MongoAtlasDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource">MongoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">MsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">MsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource">MySqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">NewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">NotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">OneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase">OneDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">OpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource">OpenSearchDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource">OracleDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">PagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource">PayPalDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">PerformFlowUiTask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource">PostgreSqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource">PrestoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">PrintReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">PublishWithoutApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase">QBusinessKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger">QuickEventTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource">RadiantDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource">RdsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource">RedshiftAutoDiscoveredDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource">RedshiftManualDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">RenameSharedFolders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research">Research</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource">S3AnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource">S3DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase">S3KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource">S3TablesDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">SalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource">SalesforceDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">SandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">SandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">SapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">SapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource">SapHanaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">SapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">SapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">SapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger">ScheduleTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">ServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource">ServiceNowDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource">ShareAdobeAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">ShareAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">ShareAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">ShareAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">ShareAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">ShareAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">ShareApps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">ShareAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource">ShareAthenaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource">ShareAuroraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">ShareBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase">ShareBedrockManagedKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">ShareBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase">ShareBoxKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">ShareCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">ShareChatAgents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">ShareComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">ShareComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">ShareConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase">ShareConfluenceKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">ShareDashboards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource">ShareDatabricksDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">ShareDatasets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">ShareDataSources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource">ShareDb2DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource">ShareDenodoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource">ShareDocumentDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource">ShareDremioDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource">ShareDynamoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource">ShareExasolDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">ShareFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource">ShareFileDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">ShareGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">ShareGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource">ShareGitHubDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource">ShareGoogleAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource">ShareGoogleBigQueryDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">ShareGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase">ShareGoogleDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource">ShareGoogleSheetsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">ShareHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">ShareHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase">ShareIdcKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource">ShareImpalaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">ShareIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">ShareJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource">ShareJiraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">ShareKnowledgeBases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">ShareLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource">ShareMariaDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">ShareMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">ShareMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource">ShareMongoAtlasDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource">ShareMongoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">ShareMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">ShareMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource">ShareMySqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">ShareNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">ShareNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">ShareOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase">ShareOneDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">ShareOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource">ShareOpenSearchDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource">ShareOracleDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">SharePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource">SharePayPalDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">SharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase">SharePointKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource">SharePostgreSqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource">SharePrestoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase">ShareQBusinessKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource">ShareRadiantDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource">ShareRdsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource">ShareRedshiftAutoDiscoveredDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource">ShareRedshiftManualDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource">ShareS3AnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource">ShareS3DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase">ShareS3KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource">ShareS3TablesDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">ShareSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource">ShareSalesforceDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">ShareSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">ShareSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">ShareSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">ShareSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource">ShareSapHanaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">ShareSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">ShareSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">ShareSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">ShareServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource">ShareServiceNowDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">ShareSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase">ShareSharePointKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">ShareSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">ShareSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource">ShareSnowflakeDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">ShareSpaces</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource">ShareSparkDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource">ShareSqlServerDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource">ShareSquareDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource">ShareStarburstDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource">ShareTeradataDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">ShareTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource">ShareTimestreamDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource">ShareTrinoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource">ShareTwitterDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase">ShareWebCrawlerKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">ShareZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">SlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">SmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource">SnowflakeDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space">Space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource">SparkDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource">SqlServerDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource">SquareDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource">StarburstDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">SubscribeDashboardEmailReports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource">TeradataDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">TextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource">TimestreamDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource">TrinoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource">TwitterDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource">UpdateAdobeAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource">UpdateAthenaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource">UpdateAuroraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource">UpdateDatabricksDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource">UpdateDb2DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource">UpdateDenodoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource">UpdateDocumentDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource">UpdateDremioDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource">UpdateDynamoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource">UpdateExasolDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource">UpdateFileDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource">UpdateGitHubDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource">UpdateGoogleAnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource">UpdateGoogleBigQueryDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource">UpdateGoogleSheetsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource">UpdateImpalaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource">UpdateJiraDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource">UpdateMariaDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource">UpdateMongoAtlasDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource">UpdateMongoDbDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource">UpdateMySqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource">UpdateOpenSearchDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource">UpdateOracleDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource">UpdatePayPalDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource">UpdatePostgreSqlDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource">UpdatePrestoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource">UpdateRadiantDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource">UpdateRdsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource">UpdateRedshiftAutoDiscoveredDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource">UpdateRedshiftManualDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource">UpdateS3AnalyticsDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource">UpdateS3DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource">UpdateS3TablesDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource">UpdateSalesforceDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource">UpdateSapHanaDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource">UpdateServiceNowDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource">UpdateSnowflakeDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource">UpdateSparkDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource">UpdateSqlServerDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource">UpdateSquareDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource">UpdateStarburstDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource">UpdateTeradataDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource">UpdateTimestreamDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource">UpdateTrinoDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource">UpdateTwitterDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">UseAgentWebSearch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">UseAmazonBedrockArsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">UseAmazonBedrockFsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">UseAmazonBedrockKrsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">UseAmazonSThreeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">UseAsanaAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">UseBambooHrAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase">UseBedrockManagedKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">UseBedrockModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">UseBoxAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase">UseBoxKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension">UseBrowserExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">UseCanvaAgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">UseComprehendAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">UseComprehendMedicalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">UseConfluenceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase">UseConfluenceKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension">UseExcelAddInExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">UseFactSetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">UseGenericHttpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">UseGithubAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">UseGoogleCalendarAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase">UseGoogleDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">UseHubspotAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">UseHuggingFaceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase">UseIdcKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">UseIntercomAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">UseJiraAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">UseLinearAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">UseMcpAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">UseMondayAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">UseMsExchangeAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">UseMsTeamsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">UseNewRelicAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">UseNotionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">UseOneDriveAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase">UseOneDriveKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">UseOpenApiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension">UseOutlookAddInExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">UsePagerDutyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension">UsePowerpointAddInExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase">UseQBusinessKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase">UseS3KnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">UseSalesforceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">UseSandPGlobalEnergyAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">UseSandPgmiAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">UseSapBillOfMaterialAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">UseSapBusinessPartnerAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">UseSapMaterialStockAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">UseSapPhysicalInventoryAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">UseSapProductMasterDataAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">UseServiceNowAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">UseSharePointAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase">UseSharePointKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">UseSlackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">UseSmartsheetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">UseTextractAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase">UseWebCrawlerKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension">UseWordAddInExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">UseZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">ViewAccountSpiceCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase">WebCrawlerKnowledgeBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">ZendeskAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAppsNativeDataStore`<sup>Required</sup> <a name="AccessAppsNativeDataStore" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```csharp
public string AccessAppsNativeDataStore { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AddOrRunAnomalyDetectionForAnalyses`<sup>Required</sup> <a name="AddOrRunAnomalyDetectionForAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```csharp
public string AddOrRunAnomalyDetectionForAnalyses { get; }
```

- *Type:* string

---

##### `AdobeAnalyticsDataSource`<sup>Required</sup> <a name="AdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource"></a>

```csharp
public string AdobeAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `AmazonBedrockArsAction`<sup>Required</sup> <a name="AmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```csharp
public string AmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockFsAction`<sup>Required</sup> <a name="AmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```csharp
public string AmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `AmazonBedrockKrsAction`<sup>Required</sup> <a name="AmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```csharp
public string AmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `AmazonSThreeAction`<sup>Required</sup> <a name="AmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```csharp
public string AmazonSThreeAction { get; }
```

- *Type:* string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```csharp
public string Analysis { get; }
```

- *Type:* string

---

##### `ApproveFlowShareRequests`<sup>Required</sup> <a name="ApproveFlowShareRequests" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```csharp
public string ApproveFlowShareRequests { get; }
```

- *Type:* string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```csharp
public string Apps { get; }
```

- *Type:* string

---

##### `AsanaAction`<sup>Required</sup> <a name="AsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```csharp
public string AsanaAction { get; }
```

- *Type:* string

---

##### `AthenaDataSource`<sup>Required</sup> <a name="AthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource"></a>

```csharp
public string AthenaDataSource { get; }
```

- *Type:* string

---

##### `AuroraDataSource`<sup>Required</sup> <a name="AuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource"></a>

```csharp
public string AuroraDataSource { get; }
```

- *Type:* string

---

##### `Automate`<sup>Required</sup> <a name="Automate" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```csharp
public string Automate { get; }
```

- *Type:* string

---

##### `BambooHrAction`<sup>Required</sup> <a name="BambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```csharp
public string BambooHrAction { get; }
```

- *Type:* string

---

##### `BedrockManagedKnowledgeBase`<sup>Required</sup> <a name="BedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase"></a>

```csharp
public string BedrockManagedKnowledgeBase { get; }
```

- *Type:* string

---

##### `BoxAgentAction`<sup>Required</sup> <a name="BoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```csharp
public string BoxAgentAction { get; }
```

- *Type:* string

---

##### `BoxKnowledgeBase`<sup>Required</sup> <a name="BoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase"></a>

```csharp
public string BoxKnowledgeBase { get; }
```

- *Type:* string

---

##### `BuildCalculatedFieldWithQ`<sup>Required</sup> <a name="BuildCalculatedFieldWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```csharp
public string BuildCalculatedFieldWithQ { get; }
```

- *Type:* string

---

##### `CanvaAgentAction`<sup>Required</sup> <a name="CanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```csharp
public string CanvaAgentAction { get; }
```

- *Type:* string

---

##### `ChatAgent`<sup>Required</sup> <a name="ChatAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```csharp
public string ChatAgent { get; }
```

- *Type:* string

---

##### `ComprehendAction`<sup>Required</sup> <a name="ComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```csharp
public string ComprehendAction { get; }
```

- *Type:* string

---

##### `ComprehendMedicalAction`<sup>Required</sup> <a name="ComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```csharp
public string ComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ConfluenceAction`<sup>Required</sup> <a name="ConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```csharp
public string ConfluenceAction { get; }
```

- *Type:* string

---

##### `ConfluenceKnowledgeBase`<sup>Required</sup> <a name="ConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase"></a>

```csharp
public string ConfluenceKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAdobeAnalyticsDataSource`<sup>Required</sup> <a name="CreateAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource"></a>

```csharp
public string CreateAdobeAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockArsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockFsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonBedrockKrsAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```csharp
public string CreateAndUpdateAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAmazonSThreeAction`<sup>Required</sup> <a name="CreateAndUpdateAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```csharp
public string CreateAndUpdateAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateApps`<sup>Required</sup> <a name="CreateAndUpdateApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```csharp
public string CreateAndUpdateApps { get; }
```

- *Type:* string

---

##### `CreateAndUpdateAsanaAction`<sup>Required</sup> <a name="CreateAndUpdateAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```csharp
public string CreateAndUpdateAsanaAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBambooHrAction`<sup>Required</sup> <a name="CreateAndUpdateBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```csharp
public string CreateAndUpdateBambooHrAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase"></a>

```csharp
public string CreateAndUpdateBedrockManagedKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBoxAgentAction`<sup>Required</sup> <a name="CreateAndUpdateBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```csharp
public string CreateAndUpdateBoxAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateBoxKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase"></a>

```csharp
public string CreateAndUpdateBoxKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateCanvaAgentAction`<sup>Required</sup> <a name="CreateAndUpdateCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```csharp
public string CreateAndUpdateCanvaAgentAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```csharp
public string CreateAndUpdateComprehendAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateComprehendMedicalAction`<sup>Required</sup> <a name="CreateAndUpdateComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```csharp
public string CreateAndUpdateComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateConfluenceAction`<sup>Required</sup> <a name="CreateAndUpdateConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```csharp
public string CreateAndUpdateConfluenceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateConfluenceKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase"></a>

```csharp
public string CreateAndUpdateConfluenceKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDashboardEmailReports`<sup>Required</sup> <a name="CreateAndUpdateDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```csharp
public string CreateAndUpdateDashboardEmailReports { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDatasets`<sup>Required</sup> <a name="CreateAndUpdateDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```csharp
public string CreateAndUpdateDatasets { get; }
```

- *Type:* string

---

##### `CreateAndUpdateDataSources`<sup>Required</sup> <a name="CreateAndUpdateDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```csharp
public string CreateAndUpdateDataSources { get; }
```

- *Type:* string

---

##### `CreateAndUpdateFactSetAction`<sup>Required</sup> <a name="CreateAndUpdateFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```csharp
public string CreateAndUpdateFactSetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGenericHttpAction`<sup>Required</sup> <a name="CreateAndUpdateGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```csharp
public string CreateAndUpdateGenericHttpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGithubAction`<sup>Required</sup> <a name="CreateAndUpdateGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```csharp
public string CreateAndUpdateGithubAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGoogleCalendarAction`<sup>Required</sup> <a name="CreateAndUpdateGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```csharp
public string CreateAndUpdateGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase"></a>

```csharp
public string CreateAndUpdateGoogleDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHubspotAction`<sup>Required</sup> <a name="CreateAndUpdateHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```csharp
public string CreateAndUpdateHubspotAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateHuggingFaceAction`<sup>Required</sup> <a name="CreateAndUpdateHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```csharp
public string CreateAndUpdateHuggingFaceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateIdcKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase"></a>

```csharp
public string CreateAndUpdateIdcKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateIntercomAction`<sup>Required</sup> <a name="CreateAndUpdateIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```csharp
public string CreateAndUpdateIntercomAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateJiraAction`<sup>Required</sup> <a name="CreateAndUpdateJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```csharp
public string CreateAndUpdateJiraAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateKnowledgeBases`<sup>Required</sup> <a name="CreateAndUpdateKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```csharp
public string CreateAndUpdateKnowledgeBases { get; }
```

- *Type:* string

---

##### `CreateAndUpdateLinearAction`<sup>Required</sup> <a name="CreateAndUpdateLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```csharp
public string CreateAndUpdateLinearAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMcpAction`<sup>Required</sup> <a name="CreateAndUpdateMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```csharp
public string CreateAndUpdateMcpAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMondayAction`<sup>Required</sup> <a name="CreateAndUpdateMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```csharp
public string CreateAndUpdateMondayAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsExchangeAction`<sup>Required</sup> <a name="CreateAndUpdateMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```csharp
public string CreateAndUpdateMsExchangeAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateMsTeamsAction`<sup>Required</sup> <a name="CreateAndUpdateMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```csharp
public string CreateAndUpdateMsTeamsAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNewRelicAction`<sup>Required</sup> <a name="CreateAndUpdateNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```csharp
public string CreateAndUpdateNewRelicAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateNotionAction`<sup>Required</sup> <a name="CreateAndUpdateNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```csharp
public string CreateAndUpdateNotionAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOneDriveAction`<sup>Required</sup> <a name="CreateAndUpdateOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```csharp
public string CreateAndUpdateOneDriveAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOneDriveKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase"></a>

```csharp
public string CreateAndUpdateOneDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateOpenApiAction`<sup>Required</sup> <a name="CreateAndUpdateOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```csharp
public string CreateAndUpdateOpenApiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdatePagerDutyAction`<sup>Required</sup> <a name="CreateAndUpdatePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```csharp
public string CreateAndUpdatePagerDutyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateQBusinessKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase"></a>

```csharp
public string CreateAndUpdateQBusinessKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateS3KnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase"></a>

```csharp
public string CreateAndUpdateS3KnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSalesforceAction`<sup>Required</sup> <a name="CreateAndUpdateSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```csharp
public string CreateAndUpdateSalesforceAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPGlobalEnergyAction`<sup>Required</sup> <a name="CreateAndUpdateSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```csharp
public string CreateAndUpdateSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSandPgmiAction`<sup>Required</sup> <a name="CreateAndUpdateSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```csharp
public string CreateAndUpdateSandPgmiAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBillOfMaterialAction`<sup>Required</sup> <a name="CreateAndUpdateSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```csharp
public string CreateAndUpdateSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapBusinessPartnerAction`<sup>Required</sup> <a name="CreateAndUpdateSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```csharp
public string CreateAndUpdateSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapMaterialStockAction`<sup>Required</sup> <a name="CreateAndUpdateSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```csharp
public string CreateAndUpdateSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapPhysicalInventoryAction`<sup>Required</sup> <a name="CreateAndUpdateSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```csharp
public string CreateAndUpdateSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSapProductMasterDataAction`<sup>Required</sup> <a name="CreateAndUpdateSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```csharp
public string CreateAndUpdateSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateServiceNowAction`<sup>Required</sup> <a name="CreateAndUpdateServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```csharp
public string CreateAndUpdateServiceNowAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSharePointAction`<sup>Required</sup> <a name="CreateAndUpdateSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```csharp
public string CreateAndUpdateSharePointAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSharePointKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase"></a>

```csharp
public string CreateAndUpdateSharePointKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSlackAction`<sup>Required</sup> <a name="CreateAndUpdateSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```csharp
public string CreateAndUpdateSlackAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateSmartsheetAction`<sup>Required</sup> <a name="CreateAndUpdateSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```csharp
public string CreateAndUpdateSmartsheetAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateTextractAction`<sup>Required</sup> <a name="CreateAndUpdateTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```csharp
public string CreateAndUpdateTextractAction { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThemes`<sup>Required</sup> <a name="CreateAndUpdateThemes" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```csharp
public string CreateAndUpdateThemes { get; }
```

- *Type:* string

---

##### `CreateAndUpdateThresholdAlerts`<sup>Required</sup> <a name="CreateAndUpdateThresholdAlerts" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```csharp
public string CreateAndUpdateThresholdAlerts { get; }
```

- *Type:* string

---

##### `CreateAndUpdateWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="CreateAndUpdateWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase"></a>

```csharp
public string CreateAndUpdateWebCrawlerKnowledgeBase { get; }
```

- *Type:* string

---

##### `CreateAndUpdateZendeskAction`<sup>Required</sup> <a name="CreateAndUpdateZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```csharp
public string CreateAndUpdateZendeskAction { get; }
```

- *Type:* string

---

##### `CreateAthenaDataSource`<sup>Required</sup> <a name="CreateAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource"></a>

```csharp
public string CreateAthenaDataSource { get; }
```

- *Type:* string

---

##### `CreateAuroraDataSource`<sup>Required</sup> <a name="CreateAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource"></a>

```csharp
public string CreateAuroraDataSource { get; }
```

- *Type:* string

---

##### `CreateChatAgents`<sup>Required</sup> <a name="CreateChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```csharp
public string CreateChatAgents { get; }
```

- *Type:* string

---

##### `CreateDashboardExecutiveSummaryWithQ`<sup>Required</sup> <a name="CreateDashboardExecutiveSummaryWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```csharp
public string CreateDashboardExecutiveSummaryWithQ { get; }
```

- *Type:* string

---

##### `CreateDatabricksDataSource`<sup>Required</sup> <a name="CreateDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource"></a>

```csharp
public string CreateDatabricksDataSource { get; }
```

- *Type:* string

---

##### `CreateDb2DataSource`<sup>Required</sup> <a name="CreateDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource"></a>

```csharp
public string CreateDb2DataSource { get; }
```

- *Type:* string

---

##### `CreateDenodoDataSource`<sup>Required</sup> <a name="CreateDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource"></a>

```csharp
public string CreateDenodoDataSource { get; }
```

- *Type:* string

---

##### `CreateDocumentDbDataSource`<sup>Required</sup> <a name="CreateDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource"></a>

```csharp
public string CreateDocumentDbDataSource { get; }
```

- *Type:* string

---

##### `CreateDremioDataSource`<sup>Required</sup> <a name="CreateDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource"></a>

```csharp
public string CreateDremioDataSource { get; }
```

- *Type:* string

---

##### `CreateDynamoDbDataSource`<sup>Required</sup> <a name="CreateDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource"></a>

```csharp
public string CreateDynamoDbDataSource { get; }
```

- *Type:* string

---

##### `CreateExasolDataSource`<sup>Required</sup> <a name="CreateExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource"></a>

```csharp
public string CreateExasolDataSource { get; }
```

- *Type:* string

---

##### `CreateFileDataSource`<sup>Required</sup> <a name="CreateFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource"></a>

```csharp
public string CreateFileDataSource { get; }
```

- *Type:* string

---

##### `CreateGitHubDataSource`<sup>Required</sup> <a name="CreateGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource"></a>

```csharp
public string CreateGitHubDataSource { get; }
```

- *Type:* string

---

##### `CreateGoogleAnalyticsDataSource`<sup>Required</sup> <a name="CreateGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource"></a>

```csharp
public string CreateGoogleAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `CreateGoogleBigQueryDataSource`<sup>Required</sup> <a name="CreateGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource"></a>

```csharp
public string CreateGoogleBigQueryDataSource { get; }
```

- *Type:* string

---

##### `CreateGoogleSheetsDataSource`<sup>Required</sup> <a name="CreateGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource"></a>

```csharp
public string CreateGoogleSheetsDataSource { get; }
```

- *Type:* string

---

##### `CreateImpalaDataSource`<sup>Required</sup> <a name="CreateImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource"></a>

```csharp
public string CreateImpalaDataSource { get; }
```

- *Type:* string

---

##### `CreateJiraDataSource`<sup>Required</sup> <a name="CreateJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource"></a>

```csharp
public string CreateJiraDataSource { get; }
```

- *Type:* string

---

##### `CreateMariaDbDataSource`<sup>Required</sup> <a name="CreateMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource"></a>

```csharp
public string CreateMariaDbDataSource { get; }
```

- *Type:* string

---

##### `CreateMongoAtlasDataSource`<sup>Required</sup> <a name="CreateMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource"></a>

```csharp
public string CreateMongoAtlasDataSource { get; }
```

- *Type:* string

---

##### `CreateMongoDbDataSource`<sup>Required</sup> <a name="CreateMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource"></a>

```csharp
public string CreateMongoDbDataSource { get; }
```

- *Type:* string

---

##### `CreateMySqlDataSource`<sup>Required</sup> <a name="CreateMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource"></a>

```csharp
public string CreateMySqlDataSource { get; }
```

- *Type:* string

---

##### `CreateOpenSearchDataSource`<sup>Required</sup> <a name="CreateOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource"></a>

```csharp
public string CreateOpenSearchDataSource { get; }
```

- *Type:* string

---

##### `CreateOracleDataSource`<sup>Required</sup> <a name="CreateOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource"></a>

```csharp
public string CreateOracleDataSource { get; }
```

- *Type:* string

---

##### `CreatePayPalDataSource`<sup>Required</sup> <a name="CreatePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource"></a>

```csharp
public string CreatePayPalDataSource { get; }
```

- *Type:* string

---

##### `CreatePostgreSqlDataSource`<sup>Required</sup> <a name="CreatePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource"></a>

```csharp
public string CreatePostgreSqlDataSource { get; }
```

- *Type:* string

---

##### `CreatePrestoDataSource`<sup>Required</sup> <a name="CreatePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource"></a>

```csharp
public string CreatePrestoDataSource { get; }
```

- *Type:* string

---

##### `CreateRadiantDataSource`<sup>Required</sup> <a name="CreateRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource"></a>

```csharp
public string CreateRadiantDataSource { get; }
```

- *Type:* string

---

##### `CreateRdsDataSource`<sup>Required</sup> <a name="CreateRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource"></a>

```csharp
public string CreateRdsDataSource { get; }
```

- *Type:* string

---

##### `CreateRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="CreateRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource"></a>

```csharp
public string CreateRedshiftAutoDiscoveredDataSource { get; }
```

- *Type:* string

---

##### `CreateRedshiftManualDataSource`<sup>Required</sup> <a name="CreateRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource"></a>

```csharp
public string CreateRedshiftManualDataSource { get; }
```

- *Type:* string

---

##### `CreateS3AnalyticsDataSource`<sup>Required</sup> <a name="CreateS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource"></a>

```csharp
public string CreateS3AnalyticsDataSource { get; }
```

- *Type:* string

---

##### `CreateS3DataSource`<sup>Required</sup> <a name="CreateS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource"></a>

```csharp
public string CreateS3DataSource { get; }
```

- *Type:* string

---

##### `CreateS3TablesDataSource`<sup>Required</sup> <a name="CreateS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource"></a>

```csharp
public string CreateS3TablesDataSource { get; }
```

- *Type:* string

---

##### `CreateSalesforceDataSource`<sup>Required</sup> <a name="CreateSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource"></a>

```csharp
public string CreateSalesforceDataSource { get; }
```

- *Type:* string

---

##### `CreateSapHanaDataSource`<sup>Required</sup> <a name="CreateSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource"></a>

```csharp
public string CreateSapHanaDataSource { get; }
```

- *Type:* string

---

##### `CreateServiceNowDataSource`<sup>Required</sup> <a name="CreateServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource"></a>

```csharp
public string CreateServiceNowDataSource { get; }
```

- *Type:* string

---

##### `CreateSharedFolders`<sup>Required</sup> <a name="CreateSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```csharp
public string CreateSharedFolders { get; }
```

- *Type:* string

---

##### `CreateSnowflakeDataSource`<sup>Required</sup> <a name="CreateSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource"></a>

```csharp
public string CreateSnowflakeDataSource { get; }
```

- *Type:* string

---

##### `CreateSpaces`<sup>Required</sup> <a name="CreateSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```csharp
public string CreateSpaces { get; }
```

- *Type:* string

---

##### `CreateSparkDataSource`<sup>Required</sup> <a name="CreateSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource"></a>

```csharp
public string CreateSparkDataSource { get; }
```

- *Type:* string

---

##### `CreateSpiceDataset`<sup>Required</sup> <a name="CreateSpiceDataset" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```csharp
public string CreateSpiceDataset { get; }
```

- *Type:* string

---

##### `CreateSqlServerDataSource`<sup>Required</sup> <a name="CreateSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource"></a>

```csharp
public string CreateSqlServerDataSource { get; }
```

- *Type:* string

---

##### `CreateSquareDataSource`<sup>Required</sup> <a name="CreateSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource"></a>

```csharp
public string CreateSquareDataSource { get; }
```

- *Type:* string

---

##### `CreateStarburstDataSource`<sup>Required</sup> <a name="CreateStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource"></a>

```csharp
public string CreateStarburstDataSource { get; }
```

- *Type:* string

---

##### `CreateTeradataDataSource`<sup>Required</sup> <a name="CreateTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource"></a>

```csharp
public string CreateTeradataDataSource { get; }
```

- *Type:* string

---

##### `CreateTimestreamDataSource`<sup>Required</sup> <a name="CreateTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource"></a>

```csharp
public string CreateTimestreamDataSource { get; }
```

- *Type:* string

---

##### `CreateTrinoDataSource`<sup>Required</sup> <a name="CreateTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource"></a>

```csharp
public string CreateTrinoDataSource { get; }
```

- *Type:* string

---

##### `CreateTwitterDataSource`<sup>Required</sup> <a name="CreateTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource"></a>

```csharp
public string CreateTwitterDataSource { get; }
```

- *Type:* string

---

##### `Dashboard`<sup>Required</sup> <a name="Dashboard" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```csharp
public string Dashboard { get; }
```

- *Type:* string

---

##### `DatabricksDataSource`<sup>Required</sup> <a name="DatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource"></a>

```csharp
public string DatabricksDataSource { get; }
```

- *Type:* string

---

##### `Db2DataSource`<sup>Required</sup> <a name="Db2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource"></a>

```csharp
public string Db2DataSource { get; }
```

- *Type:* string

---

##### `DenodoDataSource`<sup>Required</sup> <a name="DenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource"></a>

```csharp
public string DenodoDataSource { get; }
```

- *Type:* string

---

##### `DocumentDbDataSource`<sup>Required</sup> <a name="DocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource"></a>

```csharp
public string DocumentDbDataSource { get; }
```

- *Type:* string

---

##### `DremioDataSource`<sup>Required</sup> <a name="DremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource"></a>

```csharp
public string DremioDataSource { get; }
```

- *Type:* string

---

##### `DynamoDbDataSource`<sup>Required</sup> <a name="DynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource"></a>

```csharp
public string DynamoDbDataSource { get; }
```

- *Type:* string

---

##### `EditVisualWithQ`<sup>Required</sup> <a name="EditVisualWithQ" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```csharp
public string EditVisualWithQ { get; }
```

- *Type:* string

---

##### `ExasolDataSource`<sup>Required</sup> <a name="ExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource"></a>

```csharp
public string ExasolDataSource { get; }
```

- *Type:* string

---

##### `ExportToCsv`<sup>Required</sup> <a name="ExportToCsv" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```csharp
public string ExportToCsv { get; }
```

- *Type:* string

---

##### `ExportToCsvInScheduledReports`<sup>Required</sup> <a name="ExportToCsvInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```csharp
public string ExportToCsvInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToExcel`<sup>Required</sup> <a name="ExportToExcel" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```csharp
public string ExportToExcel { get; }
```

- *Type:* string

---

##### `ExportToExcelInScheduledReports`<sup>Required</sup> <a name="ExportToExcelInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```csharp
public string ExportToExcelInScheduledReports { get; }
```

- *Type:* string

---

##### `ExportToPdf`<sup>Required</sup> <a name="ExportToPdf" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```csharp
public string ExportToPdf { get; }
```

- *Type:* string

---

##### `ExportToPdfInScheduledReports`<sup>Required</sup> <a name="ExportToPdfInScheduledReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```csharp
public string ExportToPdfInScheduledReports { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `FactSetAction`<sup>Required</sup> <a name="FactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```csharp
public string FactSetAction { get; }
```

- *Type:* string

---

##### `FileDataSource`<sup>Required</sup> <a name="FileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource"></a>

```csharp
public string FileDataSource { get; }
```

- *Type:* string

---

##### `Flow`<sup>Required</sup> <a name="Flow" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```csharp
public string Flow { get; }
```

- *Type:* string

---

##### `GenericHttpAction`<sup>Required</sup> <a name="GenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```csharp
public string GenericHttpAction { get; }
```

- *Type:* string

---

##### `GithubAction`<sup>Required</sup> <a name="GithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```csharp
public string GithubAction { get; }
```

- *Type:* string

---

##### `GitHubDataSource`<sup>Required</sup> <a name="GitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource"></a>

```csharp
public string GitHubDataSource { get; }
```

- *Type:* string

---

##### `GoogleAnalyticsDataSource`<sup>Required</sup> <a name="GoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource"></a>

```csharp
public string GoogleAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `GoogleBigQueryDataSource`<sup>Required</sup> <a name="GoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource"></a>

```csharp
public string GoogleBigQueryDataSource { get; }
```

- *Type:* string

---

##### `GoogleCalendarAction`<sup>Required</sup> <a name="GoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```csharp
public string GoogleCalendarAction { get; }
```

- *Type:* string

---

##### `GoogleDriveKnowledgeBase`<sup>Required</sup> <a name="GoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase"></a>

```csharp
public string GoogleDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `GoogleSheetsDataSource`<sup>Required</sup> <a name="GoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource"></a>

```csharp
public string GoogleSheetsDataSource { get; }
```

- *Type:* string

---

##### `HubspotAction`<sup>Required</sup> <a name="HubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```csharp
public string HubspotAction { get; }
```

- *Type:* string

---

##### `HuggingFaceAction`<sup>Required</sup> <a name="HuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```csharp
public string HuggingFaceAction { get; }
```

- *Type:* string

---

##### `IdcKnowledgeBase`<sup>Required</sup> <a name="IdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase"></a>

```csharp
public string IdcKnowledgeBase { get; }
```

- *Type:* string

---

##### `ImpalaDataSource`<sup>Required</sup> <a name="ImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource"></a>

```csharp
public string ImpalaDataSource { get; }
```

- *Type:* string

---

##### `InboundEmailTrigger`<sup>Required</sup> <a name="InboundEmailTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger"></a>

```csharp
public string InboundEmailTrigger { get; }
```

- *Type:* string

---

##### `IncludeContentInScheduledReportsEmail`<sup>Required</sup> <a name="IncludeContentInScheduledReportsEmail" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```csharp
public string IncludeContentInScheduledReportsEmail { get; }
```

- *Type:* string

---

##### `IntercomAction`<sup>Required</sup> <a name="IntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```csharp
public string IntercomAction { get; }
```

- *Type:* string

---

##### `InvokeAppsAiInference`<sup>Required</sup> <a name="InvokeAppsAiInference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```csharp
public string InvokeAppsAiInference { get; }
```

- *Type:* string

---

##### `JiraAction`<sup>Required</sup> <a name="JiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```csharp
public string JiraAction { get; }
```

- *Type:* string

---

##### `JiraDataSource`<sup>Required</sup> <a name="JiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource"></a>

```csharp
public string JiraDataSource { get; }
```

- *Type:* string

---

##### `KnowledgeBase`<sup>Required</sup> <a name="KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```csharp
public string KnowledgeBase { get; }
```

- *Type:* string

---

##### `LinearAction`<sup>Required</sup> <a name="LinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```csharp
public string LinearAction { get; }
```

- *Type:* string

---

##### `ManageSharedFolders`<sup>Required</sup> <a name="ManageSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```csharp
public string ManageSharedFolders { get; }
```

- *Type:* string

---

##### `MariaDbDataSource`<sup>Required</sup> <a name="MariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource"></a>

```csharp
public string MariaDbDataSource { get; }
```

- *Type:* string

---

##### `McpAction`<sup>Required</sup> <a name="McpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```csharp
public string McpAction { get; }
```

- *Type:* string

---

##### `MondayAction`<sup>Required</sup> <a name="MondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```csharp
public string MondayAction { get; }
```

- *Type:* string

---

##### `MongoAtlasDataSource`<sup>Required</sup> <a name="MongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource"></a>

```csharp
public string MongoAtlasDataSource { get; }
```

- *Type:* string

---

##### `MongoDbDataSource`<sup>Required</sup> <a name="MongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource"></a>

```csharp
public string MongoDbDataSource { get; }
```

- *Type:* string

---

##### `MsExchangeAction`<sup>Required</sup> <a name="MsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```csharp
public string MsExchangeAction { get; }
```

- *Type:* string

---

##### `MsTeamsAction`<sup>Required</sup> <a name="MsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```csharp
public string MsTeamsAction { get; }
```

- *Type:* string

---

##### `MySqlDataSource`<sup>Required</sup> <a name="MySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource"></a>

```csharp
public string MySqlDataSource { get; }
```

- *Type:* string

---

##### `NewRelicAction`<sup>Required</sup> <a name="NewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```csharp
public string NewRelicAction { get; }
```

- *Type:* string

---

##### `NotionAction`<sup>Required</sup> <a name="NotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```csharp
public string NotionAction { get; }
```

- *Type:* string

---

##### `OneDriveAction`<sup>Required</sup> <a name="OneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```csharp
public string OneDriveAction { get; }
```

- *Type:* string

---

##### `OneDriveKnowledgeBase`<sup>Required</sup> <a name="OneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase"></a>

```csharp
public string OneDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `OpenApiAction`<sup>Required</sup> <a name="OpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```csharp
public string OpenApiAction { get; }
```

- *Type:* string

---

##### `OpenSearchDataSource`<sup>Required</sup> <a name="OpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource"></a>

```csharp
public string OpenSearchDataSource { get; }
```

- *Type:* string

---

##### `OracleDataSource`<sup>Required</sup> <a name="OracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource"></a>

```csharp
public string OracleDataSource { get; }
```

- *Type:* string

---

##### `PagerDutyAction`<sup>Required</sup> <a name="PagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```csharp
public string PagerDutyAction { get; }
```

- *Type:* string

---

##### `PayPalDataSource`<sup>Required</sup> <a name="PayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource"></a>

```csharp
public string PayPalDataSource { get; }
```

- *Type:* string

---

##### `PerformFlowUiTask`<sup>Required</sup> <a name="PerformFlowUiTask" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```csharp
public string PerformFlowUiTask { get; }
```

- *Type:* string

---

##### `PostgreSqlDataSource`<sup>Required</sup> <a name="PostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource"></a>

```csharp
public string PostgreSqlDataSource { get; }
```

- *Type:* string

---

##### `PrestoDataSource`<sup>Required</sup> <a name="PrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource"></a>

```csharp
public string PrestoDataSource { get; }
```

- *Type:* string

---

##### `PrintReports`<sup>Required</sup> <a name="PrintReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```csharp
public string PrintReports { get; }
```

- *Type:* string

---

##### `PublishWithoutApproval`<sup>Required</sup> <a name="PublishWithoutApproval" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```csharp
public string PublishWithoutApproval { get; }
```

- *Type:* string

---

##### `QBusinessKnowledgeBase`<sup>Required</sup> <a name="QBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase"></a>

```csharp
public string QBusinessKnowledgeBase { get; }
```

- *Type:* string

---

##### `QuickEventTrigger`<sup>Required</sup> <a name="QuickEventTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger"></a>

```csharp
public string QuickEventTrigger { get; }
```

- *Type:* string

---

##### `RadiantDataSource`<sup>Required</sup> <a name="RadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource"></a>

```csharp
public string RadiantDataSource { get; }
```

- *Type:* string

---

##### `RdsDataSource`<sup>Required</sup> <a name="RdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource"></a>

```csharp
public string RdsDataSource { get; }
```

- *Type:* string

---

##### `RedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="RedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource"></a>

```csharp
public string RedshiftAutoDiscoveredDataSource { get; }
```

- *Type:* string

---

##### `RedshiftManualDataSource`<sup>Required</sup> <a name="RedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource"></a>

```csharp
public string RedshiftManualDataSource { get; }
```

- *Type:* string

---

##### `RenameSharedFolders`<sup>Required</sup> <a name="RenameSharedFolders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```csharp
public string RenameSharedFolders { get; }
```

- *Type:* string

---

##### `Research`<sup>Required</sup> <a name="Research" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```csharp
public string Research { get; }
```

- *Type:* string

---

##### `S3AnalyticsDataSource`<sup>Required</sup> <a name="S3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource"></a>

```csharp
public string S3AnalyticsDataSource { get; }
```

- *Type:* string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource"></a>

```csharp
public string S3DataSource { get; }
```

- *Type:* string

---

##### `S3KnowledgeBase`<sup>Required</sup> <a name="S3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase"></a>

```csharp
public string S3KnowledgeBase { get; }
```

- *Type:* string

---

##### `S3TablesDataSource`<sup>Required</sup> <a name="S3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource"></a>

```csharp
public string S3TablesDataSource { get; }
```

- *Type:* string

---

##### `SalesforceAction`<sup>Required</sup> <a name="SalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```csharp
public string SalesforceAction { get; }
```

- *Type:* string

---

##### `SalesforceDataSource`<sup>Required</sup> <a name="SalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource"></a>

```csharp
public string SalesforceDataSource { get; }
```

- *Type:* string

---

##### `SandPGlobalEnergyAction`<sup>Required</sup> <a name="SandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```csharp
public string SandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `SandPgmiAction`<sup>Required</sup> <a name="SandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```csharp
public string SandPgmiAction { get; }
```

- *Type:* string

---

##### `SapBillOfMaterialAction`<sup>Required</sup> <a name="SapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```csharp
public string SapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `SapBusinessPartnerAction`<sup>Required</sup> <a name="SapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```csharp
public string SapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `SapHanaDataSource`<sup>Required</sup> <a name="SapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource"></a>

```csharp
public string SapHanaDataSource { get; }
```

- *Type:* string

---

##### `SapMaterialStockAction`<sup>Required</sup> <a name="SapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```csharp
public string SapMaterialStockAction { get; }
```

- *Type:* string

---

##### `SapPhysicalInventoryAction`<sup>Required</sup> <a name="SapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```csharp
public string SapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `SapProductMasterDataAction`<sup>Required</sup> <a name="SapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```csharp
public string SapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ScheduleTrigger`<sup>Required</sup> <a name="ScheduleTrigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger"></a>

```csharp
public string ScheduleTrigger { get; }
```

- *Type:* string

---

##### `ServiceNowAction`<sup>Required</sup> <a name="ServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```csharp
public string ServiceNowAction { get; }
```

- *Type:* string

---

##### `ServiceNowDataSource`<sup>Required</sup> <a name="ServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource"></a>

```csharp
public string ServiceNowDataSource { get; }
```

- *Type:* string

---

##### `ShareAdobeAnalyticsDataSource`<sup>Required</sup> <a name="ShareAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource"></a>

```csharp
public string ShareAdobeAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockArsAction`<sup>Required</sup> <a name="ShareAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```csharp
public string ShareAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockFsAction`<sup>Required</sup> <a name="ShareAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```csharp
public string ShareAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonBedrockKrsAction`<sup>Required</sup> <a name="ShareAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```csharp
public string ShareAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `ShareAmazonSThreeAction`<sup>Required</sup> <a name="ShareAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```csharp
public string ShareAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `ShareAnalyses`<sup>Required</sup> <a name="ShareAnalyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```csharp
public string ShareAnalyses { get; }
```

- *Type:* string

---

##### `ShareApps`<sup>Required</sup> <a name="ShareApps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```csharp
public string ShareApps { get; }
```

- *Type:* string

---

##### `ShareAsanaAction`<sup>Required</sup> <a name="ShareAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```csharp
public string ShareAsanaAction { get; }
```

- *Type:* string

---

##### `ShareAthenaDataSource`<sup>Required</sup> <a name="ShareAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource"></a>

```csharp
public string ShareAthenaDataSource { get; }
```

- *Type:* string

---

##### `ShareAuroraDataSource`<sup>Required</sup> <a name="ShareAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource"></a>

```csharp
public string ShareAuroraDataSource { get; }
```

- *Type:* string

---

##### `ShareBambooHrAction`<sup>Required</sup> <a name="ShareBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```csharp
public string ShareBambooHrAction { get; }
```

- *Type:* string

---

##### `ShareBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="ShareBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase"></a>

```csharp
public string ShareBedrockManagedKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareBoxAgentAction`<sup>Required</sup> <a name="ShareBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```csharp
public string ShareBoxAgentAction { get; }
```

- *Type:* string

---

##### `ShareBoxKnowledgeBase`<sup>Required</sup> <a name="ShareBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase"></a>

```csharp
public string ShareBoxKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareCanvaAgentAction`<sup>Required</sup> <a name="ShareCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```csharp
public string ShareCanvaAgentAction { get; }
```

- *Type:* string

---

##### `ShareChatAgents`<sup>Required</sup> <a name="ShareChatAgents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```csharp
public string ShareChatAgents { get; }
```

- *Type:* string

---

##### `ShareComprehendAction`<sup>Required</sup> <a name="ShareComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```csharp
public string ShareComprehendAction { get; }
```

- *Type:* string

---

##### `ShareComprehendMedicalAction`<sup>Required</sup> <a name="ShareComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```csharp
public string ShareComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `ShareConfluenceAction`<sup>Required</sup> <a name="ShareConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```csharp
public string ShareConfluenceAction { get; }
```

- *Type:* string

---

##### `ShareConfluenceKnowledgeBase`<sup>Required</sup> <a name="ShareConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase"></a>

```csharp
public string ShareConfluenceKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareDashboards`<sup>Required</sup> <a name="ShareDashboards" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```csharp
public string ShareDashboards { get; }
```

- *Type:* string

---

##### `ShareDatabricksDataSource`<sup>Required</sup> <a name="ShareDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource"></a>

```csharp
public string ShareDatabricksDataSource { get; }
```

- *Type:* string

---

##### `ShareDatasets`<sup>Required</sup> <a name="ShareDatasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```csharp
public string ShareDatasets { get; }
```

- *Type:* string

---

##### `ShareDataSources`<sup>Required</sup> <a name="ShareDataSources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```csharp
public string ShareDataSources { get; }
```

- *Type:* string

---

##### `ShareDb2DataSource`<sup>Required</sup> <a name="ShareDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource"></a>

```csharp
public string ShareDb2DataSource { get; }
```

- *Type:* string

---

##### `ShareDenodoDataSource`<sup>Required</sup> <a name="ShareDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource"></a>

```csharp
public string ShareDenodoDataSource { get; }
```

- *Type:* string

---

##### `ShareDocumentDbDataSource`<sup>Required</sup> <a name="ShareDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource"></a>

```csharp
public string ShareDocumentDbDataSource { get; }
```

- *Type:* string

---

##### `ShareDremioDataSource`<sup>Required</sup> <a name="ShareDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource"></a>

```csharp
public string ShareDremioDataSource { get; }
```

- *Type:* string

---

##### `ShareDynamoDbDataSource`<sup>Required</sup> <a name="ShareDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource"></a>

```csharp
public string ShareDynamoDbDataSource { get; }
```

- *Type:* string

---

##### `ShareExasolDataSource`<sup>Required</sup> <a name="ShareExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource"></a>

```csharp
public string ShareExasolDataSource { get; }
```

- *Type:* string

---

##### `ShareFactSetAction`<sup>Required</sup> <a name="ShareFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```csharp
public string ShareFactSetAction { get; }
```

- *Type:* string

---

##### `ShareFileDataSource`<sup>Required</sup> <a name="ShareFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource"></a>

```csharp
public string ShareFileDataSource { get; }
```

- *Type:* string

---

##### `ShareGenericHttpAction`<sup>Required</sup> <a name="ShareGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```csharp
public string ShareGenericHttpAction { get; }
```

- *Type:* string

---

##### `ShareGithubAction`<sup>Required</sup> <a name="ShareGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```csharp
public string ShareGithubAction { get; }
```

- *Type:* string

---

##### `ShareGitHubDataSource`<sup>Required</sup> <a name="ShareGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource"></a>

```csharp
public string ShareGitHubDataSource { get; }
```

- *Type:* string

---

##### `ShareGoogleAnalyticsDataSource`<sup>Required</sup> <a name="ShareGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource"></a>

```csharp
public string ShareGoogleAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `ShareGoogleBigQueryDataSource`<sup>Required</sup> <a name="ShareGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource"></a>

```csharp
public string ShareGoogleBigQueryDataSource { get; }
```

- *Type:* string

---

##### `ShareGoogleCalendarAction`<sup>Required</sup> <a name="ShareGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```csharp
public string ShareGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `ShareGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="ShareGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase"></a>

```csharp
public string ShareGoogleDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareGoogleSheetsDataSource`<sup>Required</sup> <a name="ShareGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource"></a>

```csharp
public string ShareGoogleSheetsDataSource { get; }
```

- *Type:* string

---

##### `ShareHubspotAction`<sup>Required</sup> <a name="ShareHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```csharp
public string ShareHubspotAction { get; }
```

- *Type:* string

---

##### `ShareHuggingFaceAction`<sup>Required</sup> <a name="ShareHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```csharp
public string ShareHuggingFaceAction { get; }
```

- *Type:* string

---

##### `ShareIdcKnowledgeBase`<sup>Required</sup> <a name="ShareIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase"></a>

```csharp
public string ShareIdcKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareImpalaDataSource`<sup>Required</sup> <a name="ShareImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource"></a>

```csharp
public string ShareImpalaDataSource { get; }
```

- *Type:* string

---

##### `ShareIntercomAction`<sup>Required</sup> <a name="ShareIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```csharp
public string ShareIntercomAction { get; }
```

- *Type:* string

---

##### `ShareJiraAction`<sup>Required</sup> <a name="ShareJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```csharp
public string ShareJiraAction { get; }
```

- *Type:* string

---

##### `ShareJiraDataSource`<sup>Required</sup> <a name="ShareJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource"></a>

```csharp
public string ShareJiraDataSource { get; }
```

- *Type:* string

---

##### `ShareKnowledgeBases`<sup>Required</sup> <a name="ShareKnowledgeBases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```csharp
public string ShareKnowledgeBases { get; }
```

- *Type:* string

---

##### `ShareLinearAction`<sup>Required</sup> <a name="ShareLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```csharp
public string ShareLinearAction { get; }
```

- *Type:* string

---

##### `ShareMariaDbDataSource`<sup>Required</sup> <a name="ShareMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource"></a>

```csharp
public string ShareMariaDbDataSource { get; }
```

- *Type:* string

---

##### `ShareMcpAction`<sup>Required</sup> <a name="ShareMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```csharp
public string ShareMcpAction { get; }
```

- *Type:* string

---

##### `ShareMondayAction`<sup>Required</sup> <a name="ShareMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```csharp
public string ShareMondayAction { get; }
```

- *Type:* string

---

##### `ShareMongoAtlasDataSource`<sup>Required</sup> <a name="ShareMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource"></a>

```csharp
public string ShareMongoAtlasDataSource { get; }
```

- *Type:* string

---

##### `ShareMongoDbDataSource`<sup>Required</sup> <a name="ShareMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource"></a>

```csharp
public string ShareMongoDbDataSource { get; }
```

- *Type:* string

---

##### `ShareMsExchangeAction`<sup>Required</sup> <a name="ShareMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```csharp
public string ShareMsExchangeAction { get; }
```

- *Type:* string

---

##### `ShareMsTeamsAction`<sup>Required</sup> <a name="ShareMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```csharp
public string ShareMsTeamsAction { get; }
```

- *Type:* string

---

##### `ShareMySqlDataSource`<sup>Required</sup> <a name="ShareMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource"></a>

```csharp
public string ShareMySqlDataSource { get; }
```

- *Type:* string

---

##### `ShareNewRelicAction`<sup>Required</sup> <a name="ShareNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```csharp
public string ShareNewRelicAction { get; }
```

- *Type:* string

---

##### `ShareNotionAction`<sup>Required</sup> <a name="ShareNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```csharp
public string ShareNotionAction { get; }
```

- *Type:* string

---

##### `ShareOneDriveAction`<sup>Required</sup> <a name="ShareOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```csharp
public string ShareOneDriveAction { get; }
```

- *Type:* string

---

##### `ShareOneDriveKnowledgeBase`<sup>Required</sup> <a name="ShareOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase"></a>

```csharp
public string ShareOneDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareOpenApiAction`<sup>Required</sup> <a name="ShareOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```csharp
public string ShareOpenApiAction { get; }
```

- *Type:* string

---

##### `ShareOpenSearchDataSource`<sup>Required</sup> <a name="ShareOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource"></a>

```csharp
public string ShareOpenSearchDataSource { get; }
```

- *Type:* string

---

##### `ShareOracleDataSource`<sup>Required</sup> <a name="ShareOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource"></a>

```csharp
public string ShareOracleDataSource { get; }
```

- *Type:* string

---

##### `SharePagerDutyAction`<sup>Required</sup> <a name="SharePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```csharp
public string SharePagerDutyAction { get; }
```

- *Type:* string

---

##### `SharePayPalDataSource`<sup>Required</sup> <a name="SharePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource"></a>

```csharp
public string SharePayPalDataSource { get; }
```

- *Type:* string

---

##### `SharePointAction`<sup>Required</sup> <a name="SharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```csharp
public string SharePointAction { get; }
```

- *Type:* string

---

##### `SharePointKnowledgeBase`<sup>Required</sup> <a name="SharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase"></a>

```csharp
public string SharePointKnowledgeBase { get; }
```

- *Type:* string

---

##### `SharePostgreSqlDataSource`<sup>Required</sup> <a name="SharePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource"></a>

```csharp
public string SharePostgreSqlDataSource { get; }
```

- *Type:* string

---

##### `SharePrestoDataSource`<sup>Required</sup> <a name="SharePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource"></a>

```csharp
public string SharePrestoDataSource { get; }
```

- *Type:* string

---

##### `ShareQBusinessKnowledgeBase`<sup>Required</sup> <a name="ShareQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase"></a>

```csharp
public string ShareQBusinessKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareRadiantDataSource`<sup>Required</sup> <a name="ShareRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource"></a>

```csharp
public string ShareRadiantDataSource { get; }
```

- *Type:* string

---

##### `ShareRdsDataSource`<sup>Required</sup> <a name="ShareRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource"></a>

```csharp
public string ShareRdsDataSource { get; }
```

- *Type:* string

---

##### `ShareRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="ShareRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource"></a>

```csharp
public string ShareRedshiftAutoDiscoveredDataSource { get; }
```

- *Type:* string

---

##### `ShareRedshiftManualDataSource`<sup>Required</sup> <a name="ShareRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource"></a>

```csharp
public string ShareRedshiftManualDataSource { get; }
```

- *Type:* string

---

##### `ShareS3AnalyticsDataSource`<sup>Required</sup> <a name="ShareS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource"></a>

```csharp
public string ShareS3AnalyticsDataSource { get; }
```

- *Type:* string

---

##### `ShareS3DataSource`<sup>Required</sup> <a name="ShareS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource"></a>

```csharp
public string ShareS3DataSource { get; }
```

- *Type:* string

---

##### `ShareS3KnowledgeBase`<sup>Required</sup> <a name="ShareS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase"></a>

```csharp
public string ShareS3KnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareS3TablesDataSource`<sup>Required</sup> <a name="ShareS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource"></a>

```csharp
public string ShareS3TablesDataSource { get; }
```

- *Type:* string

---

##### `ShareSalesforceAction`<sup>Required</sup> <a name="ShareSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```csharp
public string ShareSalesforceAction { get; }
```

- *Type:* string

---

##### `ShareSalesforceDataSource`<sup>Required</sup> <a name="ShareSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource"></a>

```csharp
public string ShareSalesforceDataSource { get; }
```

- *Type:* string

---

##### `ShareSandPGlobalEnergyAction`<sup>Required</sup> <a name="ShareSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```csharp
public string ShareSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `ShareSandPgmiAction`<sup>Required</sup> <a name="ShareSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```csharp
public string ShareSandPgmiAction { get; }
```

- *Type:* string

---

##### `ShareSapBillOfMaterialAction`<sup>Required</sup> <a name="ShareSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```csharp
public string ShareSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `ShareSapBusinessPartnerAction`<sup>Required</sup> <a name="ShareSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```csharp
public string ShareSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `ShareSapHanaDataSource`<sup>Required</sup> <a name="ShareSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource"></a>

```csharp
public string ShareSapHanaDataSource { get; }
```

- *Type:* string

---

##### `ShareSapMaterialStockAction`<sup>Required</sup> <a name="ShareSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```csharp
public string ShareSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `ShareSapPhysicalInventoryAction`<sup>Required</sup> <a name="ShareSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```csharp
public string ShareSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `ShareSapProductMasterDataAction`<sup>Required</sup> <a name="ShareSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```csharp
public string ShareSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `ShareServiceNowAction`<sup>Required</sup> <a name="ShareServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```csharp
public string ShareServiceNowAction { get; }
```

- *Type:* string

---

##### `ShareServiceNowDataSource`<sup>Required</sup> <a name="ShareServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource"></a>

```csharp
public string ShareServiceNowDataSource { get; }
```

- *Type:* string

---

##### `ShareSharePointAction`<sup>Required</sup> <a name="ShareSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```csharp
public string ShareSharePointAction { get; }
```

- *Type:* string

---

##### `ShareSharePointKnowledgeBase`<sup>Required</sup> <a name="ShareSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase"></a>

```csharp
public string ShareSharePointKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareSlackAction`<sup>Required</sup> <a name="ShareSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```csharp
public string ShareSlackAction { get; }
```

- *Type:* string

---

##### `ShareSmartsheetAction`<sup>Required</sup> <a name="ShareSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```csharp
public string ShareSmartsheetAction { get; }
```

- *Type:* string

---

##### `ShareSnowflakeDataSource`<sup>Required</sup> <a name="ShareSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource"></a>

```csharp
public string ShareSnowflakeDataSource { get; }
```

- *Type:* string

---

##### `ShareSpaces`<sup>Required</sup> <a name="ShareSpaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```csharp
public string ShareSpaces { get; }
```

- *Type:* string

---

##### `ShareSparkDataSource`<sup>Required</sup> <a name="ShareSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource"></a>

```csharp
public string ShareSparkDataSource { get; }
```

- *Type:* string

---

##### `ShareSqlServerDataSource`<sup>Required</sup> <a name="ShareSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource"></a>

```csharp
public string ShareSqlServerDataSource { get; }
```

- *Type:* string

---

##### `ShareSquareDataSource`<sup>Required</sup> <a name="ShareSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource"></a>

```csharp
public string ShareSquareDataSource { get; }
```

- *Type:* string

---

##### `ShareStarburstDataSource`<sup>Required</sup> <a name="ShareStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource"></a>

```csharp
public string ShareStarburstDataSource { get; }
```

- *Type:* string

---

##### `ShareTeradataDataSource`<sup>Required</sup> <a name="ShareTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource"></a>

```csharp
public string ShareTeradataDataSource { get; }
```

- *Type:* string

---

##### `ShareTextractAction`<sup>Required</sup> <a name="ShareTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```csharp
public string ShareTextractAction { get; }
```

- *Type:* string

---

##### `ShareTimestreamDataSource`<sup>Required</sup> <a name="ShareTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource"></a>

```csharp
public string ShareTimestreamDataSource { get; }
```

- *Type:* string

---

##### `ShareTrinoDataSource`<sup>Required</sup> <a name="ShareTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource"></a>

```csharp
public string ShareTrinoDataSource { get; }
```

- *Type:* string

---

##### `ShareTwitterDataSource`<sup>Required</sup> <a name="ShareTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource"></a>

```csharp
public string ShareTwitterDataSource { get; }
```

- *Type:* string

---

##### `ShareWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="ShareWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase"></a>

```csharp
public string ShareWebCrawlerKnowledgeBase { get; }
```

- *Type:* string

---

##### `ShareZendeskAction`<sup>Required</sup> <a name="ShareZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```csharp
public string ShareZendeskAction { get; }
```

- *Type:* string

---

##### `SlackAction`<sup>Required</sup> <a name="SlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```csharp
public string SlackAction { get; }
```

- *Type:* string

---

##### `SmartsheetAction`<sup>Required</sup> <a name="SmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```csharp
public string SmartsheetAction { get; }
```

- *Type:* string

---

##### `SnowflakeDataSource`<sup>Required</sup> <a name="SnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource"></a>

```csharp
public string SnowflakeDataSource { get; }
```

- *Type:* string

---

##### `Space`<sup>Required</sup> <a name="Space" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```csharp
public string Space { get; }
```

- *Type:* string

---

##### `SparkDataSource`<sup>Required</sup> <a name="SparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource"></a>

```csharp
public string SparkDataSource { get; }
```

- *Type:* string

---

##### `SqlServerDataSource`<sup>Required</sup> <a name="SqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource"></a>

```csharp
public string SqlServerDataSource { get; }
```

- *Type:* string

---

##### `SquareDataSource`<sup>Required</sup> <a name="SquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource"></a>

```csharp
public string SquareDataSource { get; }
```

- *Type:* string

---

##### `StarburstDataSource`<sup>Required</sup> <a name="StarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource"></a>

```csharp
public string StarburstDataSource { get; }
```

- *Type:* string

---

##### `SubscribeDashboardEmailReports`<sup>Required</sup> <a name="SubscribeDashboardEmailReports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```csharp
public string SubscribeDashboardEmailReports { get; }
```

- *Type:* string

---

##### `TeradataDataSource`<sup>Required</sup> <a name="TeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource"></a>

```csharp
public string TeradataDataSource { get; }
```

- *Type:* string

---

##### `TextractAction`<sup>Required</sup> <a name="TextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```csharp
public string TextractAction { get; }
```

- *Type:* string

---

##### `TimestreamDataSource`<sup>Required</sup> <a name="TimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource"></a>

```csharp
public string TimestreamDataSource { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `TrinoDataSource`<sup>Required</sup> <a name="TrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource"></a>

```csharp
public string TrinoDataSource { get; }
```

- *Type:* string

---

##### `TwitterDataSource`<sup>Required</sup> <a name="TwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource"></a>

```csharp
public string TwitterDataSource { get; }
```

- *Type:* string

---

##### `UpdateAdobeAnalyticsDataSource`<sup>Required</sup> <a name="UpdateAdobeAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource"></a>

```csharp
public string UpdateAdobeAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `UpdateAthenaDataSource`<sup>Required</sup> <a name="UpdateAthenaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource"></a>

```csharp
public string UpdateAthenaDataSource { get; }
```

- *Type:* string

---

##### `UpdateAuroraDataSource`<sup>Required</sup> <a name="UpdateAuroraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource"></a>

```csharp
public string UpdateAuroraDataSource { get; }
```

- *Type:* string

---

##### `UpdateDatabricksDataSource`<sup>Required</sup> <a name="UpdateDatabricksDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource"></a>

```csharp
public string UpdateDatabricksDataSource { get; }
```

- *Type:* string

---

##### `UpdateDb2DataSource`<sup>Required</sup> <a name="UpdateDb2DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource"></a>

```csharp
public string UpdateDb2DataSource { get; }
```

- *Type:* string

---

##### `UpdateDenodoDataSource`<sup>Required</sup> <a name="UpdateDenodoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource"></a>

```csharp
public string UpdateDenodoDataSource { get; }
```

- *Type:* string

---

##### `UpdateDocumentDbDataSource`<sup>Required</sup> <a name="UpdateDocumentDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource"></a>

```csharp
public string UpdateDocumentDbDataSource { get; }
```

- *Type:* string

---

##### `UpdateDremioDataSource`<sup>Required</sup> <a name="UpdateDremioDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource"></a>

```csharp
public string UpdateDremioDataSource { get; }
```

- *Type:* string

---

##### `UpdateDynamoDbDataSource`<sup>Required</sup> <a name="UpdateDynamoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource"></a>

```csharp
public string UpdateDynamoDbDataSource { get; }
```

- *Type:* string

---

##### `UpdateExasolDataSource`<sup>Required</sup> <a name="UpdateExasolDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource"></a>

```csharp
public string UpdateExasolDataSource { get; }
```

- *Type:* string

---

##### `UpdateFileDataSource`<sup>Required</sup> <a name="UpdateFileDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource"></a>

```csharp
public string UpdateFileDataSource { get; }
```

- *Type:* string

---

##### `UpdateGitHubDataSource`<sup>Required</sup> <a name="UpdateGitHubDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource"></a>

```csharp
public string UpdateGitHubDataSource { get; }
```

- *Type:* string

---

##### `UpdateGoogleAnalyticsDataSource`<sup>Required</sup> <a name="UpdateGoogleAnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource"></a>

```csharp
public string UpdateGoogleAnalyticsDataSource { get; }
```

- *Type:* string

---

##### `UpdateGoogleBigQueryDataSource`<sup>Required</sup> <a name="UpdateGoogleBigQueryDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource"></a>

```csharp
public string UpdateGoogleBigQueryDataSource { get; }
```

- *Type:* string

---

##### `UpdateGoogleSheetsDataSource`<sup>Required</sup> <a name="UpdateGoogleSheetsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource"></a>

```csharp
public string UpdateGoogleSheetsDataSource { get; }
```

- *Type:* string

---

##### `UpdateImpalaDataSource`<sup>Required</sup> <a name="UpdateImpalaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource"></a>

```csharp
public string UpdateImpalaDataSource { get; }
```

- *Type:* string

---

##### `UpdateJiraDataSource`<sup>Required</sup> <a name="UpdateJiraDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource"></a>

```csharp
public string UpdateJiraDataSource { get; }
```

- *Type:* string

---

##### `UpdateMariaDbDataSource`<sup>Required</sup> <a name="UpdateMariaDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource"></a>

```csharp
public string UpdateMariaDbDataSource { get; }
```

- *Type:* string

---

##### `UpdateMongoAtlasDataSource`<sup>Required</sup> <a name="UpdateMongoAtlasDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource"></a>

```csharp
public string UpdateMongoAtlasDataSource { get; }
```

- *Type:* string

---

##### `UpdateMongoDbDataSource`<sup>Required</sup> <a name="UpdateMongoDbDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource"></a>

```csharp
public string UpdateMongoDbDataSource { get; }
```

- *Type:* string

---

##### `UpdateMySqlDataSource`<sup>Required</sup> <a name="UpdateMySqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource"></a>

```csharp
public string UpdateMySqlDataSource { get; }
```

- *Type:* string

---

##### `UpdateOpenSearchDataSource`<sup>Required</sup> <a name="UpdateOpenSearchDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource"></a>

```csharp
public string UpdateOpenSearchDataSource { get; }
```

- *Type:* string

---

##### `UpdateOracleDataSource`<sup>Required</sup> <a name="UpdateOracleDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource"></a>

```csharp
public string UpdateOracleDataSource { get; }
```

- *Type:* string

---

##### `UpdatePayPalDataSource`<sup>Required</sup> <a name="UpdatePayPalDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource"></a>

```csharp
public string UpdatePayPalDataSource { get; }
```

- *Type:* string

---

##### `UpdatePostgreSqlDataSource`<sup>Required</sup> <a name="UpdatePostgreSqlDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource"></a>

```csharp
public string UpdatePostgreSqlDataSource { get; }
```

- *Type:* string

---

##### `UpdatePrestoDataSource`<sup>Required</sup> <a name="UpdatePrestoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource"></a>

```csharp
public string UpdatePrestoDataSource { get; }
```

- *Type:* string

---

##### `UpdateRadiantDataSource`<sup>Required</sup> <a name="UpdateRadiantDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource"></a>

```csharp
public string UpdateRadiantDataSource { get; }
```

- *Type:* string

---

##### `UpdateRdsDataSource`<sup>Required</sup> <a name="UpdateRdsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource"></a>

```csharp
public string UpdateRdsDataSource { get; }
```

- *Type:* string

---

##### `UpdateRedshiftAutoDiscoveredDataSource`<sup>Required</sup> <a name="UpdateRedshiftAutoDiscoveredDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource"></a>

```csharp
public string UpdateRedshiftAutoDiscoveredDataSource { get; }
```

- *Type:* string

---

##### `UpdateRedshiftManualDataSource`<sup>Required</sup> <a name="UpdateRedshiftManualDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource"></a>

```csharp
public string UpdateRedshiftManualDataSource { get; }
```

- *Type:* string

---

##### `UpdateS3AnalyticsDataSource`<sup>Required</sup> <a name="UpdateS3AnalyticsDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource"></a>

```csharp
public string UpdateS3AnalyticsDataSource { get; }
```

- *Type:* string

---

##### `UpdateS3DataSource`<sup>Required</sup> <a name="UpdateS3DataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource"></a>

```csharp
public string UpdateS3DataSource { get; }
```

- *Type:* string

---

##### `UpdateS3TablesDataSource`<sup>Required</sup> <a name="UpdateS3TablesDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource"></a>

```csharp
public string UpdateS3TablesDataSource { get; }
```

- *Type:* string

---

##### `UpdateSalesforceDataSource`<sup>Required</sup> <a name="UpdateSalesforceDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource"></a>

```csharp
public string UpdateSalesforceDataSource { get; }
```

- *Type:* string

---

##### `UpdateSapHanaDataSource`<sup>Required</sup> <a name="UpdateSapHanaDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource"></a>

```csharp
public string UpdateSapHanaDataSource { get; }
```

- *Type:* string

---

##### `UpdateServiceNowDataSource`<sup>Required</sup> <a name="UpdateServiceNowDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource"></a>

```csharp
public string UpdateServiceNowDataSource { get; }
```

- *Type:* string

---

##### `UpdateSnowflakeDataSource`<sup>Required</sup> <a name="UpdateSnowflakeDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource"></a>

```csharp
public string UpdateSnowflakeDataSource { get; }
```

- *Type:* string

---

##### `UpdateSparkDataSource`<sup>Required</sup> <a name="UpdateSparkDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource"></a>

```csharp
public string UpdateSparkDataSource { get; }
```

- *Type:* string

---

##### `UpdateSqlServerDataSource`<sup>Required</sup> <a name="UpdateSqlServerDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource"></a>

```csharp
public string UpdateSqlServerDataSource { get; }
```

- *Type:* string

---

##### `UpdateSquareDataSource`<sup>Required</sup> <a name="UpdateSquareDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource"></a>

```csharp
public string UpdateSquareDataSource { get; }
```

- *Type:* string

---

##### `UpdateStarburstDataSource`<sup>Required</sup> <a name="UpdateStarburstDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource"></a>

```csharp
public string UpdateStarburstDataSource { get; }
```

- *Type:* string

---

##### `UpdateTeradataDataSource`<sup>Required</sup> <a name="UpdateTeradataDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource"></a>

```csharp
public string UpdateTeradataDataSource { get; }
```

- *Type:* string

---

##### `UpdateTimestreamDataSource`<sup>Required</sup> <a name="UpdateTimestreamDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource"></a>

```csharp
public string UpdateTimestreamDataSource { get; }
```

- *Type:* string

---

##### `UpdateTrinoDataSource`<sup>Required</sup> <a name="UpdateTrinoDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource"></a>

```csharp
public string UpdateTrinoDataSource { get; }
```

- *Type:* string

---

##### `UpdateTwitterDataSource`<sup>Required</sup> <a name="UpdateTwitterDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource"></a>

```csharp
public string UpdateTwitterDataSource { get; }
```

- *Type:* string

---

##### `UseAgentWebSearch`<sup>Required</sup> <a name="UseAgentWebSearch" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```csharp
public string UseAgentWebSearch { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockArsAction`<sup>Required</sup> <a name="UseAmazonBedrockArsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```csharp
public string UseAmazonBedrockArsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockFsAction`<sup>Required</sup> <a name="UseAmazonBedrockFsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```csharp
public string UseAmazonBedrockFsAction { get; }
```

- *Type:* string

---

##### `UseAmazonBedrockKrsAction`<sup>Required</sup> <a name="UseAmazonBedrockKrsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```csharp
public string UseAmazonBedrockKrsAction { get; }
```

- *Type:* string

---

##### `UseAmazonSThreeAction`<sup>Required</sup> <a name="UseAmazonSThreeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```csharp
public string UseAmazonSThreeAction { get; }
```

- *Type:* string

---

##### `UseAsanaAction`<sup>Required</sup> <a name="UseAsanaAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```csharp
public string UseAsanaAction { get; }
```

- *Type:* string

---

##### `UseBambooHrAction`<sup>Required</sup> <a name="UseBambooHrAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```csharp
public string UseBambooHrAction { get; }
```

- *Type:* string

---

##### `UseBedrockManagedKnowledgeBase`<sup>Required</sup> <a name="UseBedrockManagedKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase"></a>

```csharp
public string UseBedrockManagedKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseBedrockModels`<sup>Required</sup> <a name="UseBedrockModels" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```csharp
public string UseBedrockModels { get; }
```

- *Type:* string

---

##### `UseBoxAgentAction`<sup>Required</sup> <a name="UseBoxAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```csharp
public string UseBoxAgentAction { get; }
```

- *Type:* string

---

##### `UseBoxKnowledgeBase`<sup>Required</sup> <a name="UseBoxKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase"></a>

```csharp
public string UseBoxKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseBrowserExtension`<sup>Required</sup> <a name="UseBrowserExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension"></a>

```csharp
public string UseBrowserExtension { get; }
```

- *Type:* string

---

##### `UseCanvaAgentAction`<sup>Required</sup> <a name="UseCanvaAgentAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```csharp
public string UseCanvaAgentAction { get; }
```

- *Type:* string

---

##### `UseComprehendAction`<sup>Required</sup> <a name="UseComprehendAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```csharp
public string UseComprehendAction { get; }
```

- *Type:* string

---

##### `UseComprehendMedicalAction`<sup>Required</sup> <a name="UseComprehendMedicalAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```csharp
public string UseComprehendMedicalAction { get; }
```

- *Type:* string

---

##### `UseConfluenceAction`<sup>Required</sup> <a name="UseConfluenceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```csharp
public string UseConfluenceAction { get; }
```

- *Type:* string

---

##### `UseConfluenceKnowledgeBase`<sup>Required</sup> <a name="UseConfluenceKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase"></a>

```csharp
public string UseConfluenceKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseExcelAddInExtension`<sup>Required</sup> <a name="UseExcelAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension"></a>

```csharp
public string UseExcelAddInExtension { get; }
```

- *Type:* string

---

##### `UseFactSetAction`<sup>Required</sup> <a name="UseFactSetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```csharp
public string UseFactSetAction { get; }
```

- *Type:* string

---

##### `UseGenericHttpAction`<sup>Required</sup> <a name="UseGenericHttpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```csharp
public string UseGenericHttpAction { get; }
```

- *Type:* string

---

##### `UseGithubAction`<sup>Required</sup> <a name="UseGithubAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```csharp
public string UseGithubAction { get; }
```

- *Type:* string

---

##### `UseGoogleCalendarAction`<sup>Required</sup> <a name="UseGoogleCalendarAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```csharp
public string UseGoogleCalendarAction { get; }
```

- *Type:* string

---

##### `UseGoogleDriveKnowledgeBase`<sup>Required</sup> <a name="UseGoogleDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase"></a>

```csharp
public string UseGoogleDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseHubspotAction`<sup>Required</sup> <a name="UseHubspotAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```csharp
public string UseHubspotAction { get; }
```

- *Type:* string

---

##### `UseHuggingFaceAction`<sup>Required</sup> <a name="UseHuggingFaceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```csharp
public string UseHuggingFaceAction { get; }
```

- *Type:* string

---

##### `UseIdcKnowledgeBase`<sup>Required</sup> <a name="UseIdcKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase"></a>

```csharp
public string UseIdcKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseIntercomAction`<sup>Required</sup> <a name="UseIntercomAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```csharp
public string UseIntercomAction { get; }
```

- *Type:* string

---

##### `UseJiraAction`<sup>Required</sup> <a name="UseJiraAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```csharp
public string UseJiraAction { get; }
```

- *Type:* string

---

##### `UseLinearAction`<sup>Required</sup> <a name="UseLinearAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```csharp
public string UseLinearAction { get; }
```

- *Type:* string

---

##### `UseMcpAction`<sup>Required</sup> <a name="UseMcpAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```csharp
public string UseMcpAction { get; }
```

- *Type:* string

---

##### `UseMondayAction`<sup>Required</sup> <a name="UseMondayAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```csharp
public string UseMondayAction { get; }
```

- *Type:* string

---

##### `UseMsExchangeAction`<sup>Required</sup> <a name="UseMsExchangeAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```csharp
public string UseMsExchangeAction { get; }
```

- *Type:* string

---

##### `UseMsTeamsAction`<sup>Required</sup> <a name="UseMsTeamsAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```csharp
public string UseMsTeamsAction { get; }
```

- *Type:* string

---

##### `UseNewRelicAction`<sup>Required</sup> <a name="UseNewRelicAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```csharp
public string UseNewRelicAction { get; }
```

- *Type:* string

---

##### `UseNotionAction`<sup>Required</sup> <a name="UseNotionAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```csharp
public string UseNotionAction { get; }
```

- *Type:* string

---

##### `UseOneDriveAction`<sup>Required</sup> <a name="UseOneDriveAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```csharp
public string UseOneDriveAction { get; }
```

- *Type:* string

---

##### `UseOneDriveKnowledgeBase`<sup>Required</sup> <a name="UseOneDriveKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase"></a>

```csharp
public string UseOneDriveKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseOpenApiAction`<sup>Required</sup> <a name="UseOpenApiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```csharp
public string UseOpenApiAction { get; }
```

- *Type:* string

---

##### `UseOutlookAddInExtension`<sup>Required</sup> <a name="UseOutlookAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension"></a>

```csharp
public string UseOutlookAddInExtension { get; }
```

- *Type:* string

---

##### `UsePagerDutyAction`<sup>Required</sup> <a name="UsePagerDutyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```csharp
public string UsePagerDutyAction { get; }
```

- *Type:* string

---

##### `UsePowerpointAddInExtension`<sup>Required</sup> <a name="UsePowerpointAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension"></a>

```csharp
public string UsePowerpointAddInExtension { get; }
```

- *Type:* string

---

##### `UseQBusinessKnowledgeBase`<sup>Required</sup> <a name="UseQBusinessKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase"></a>

```csharp
public string UseQBusinessKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseS3KnowledgeBase`<sup>Required</sup> <a name="UseS3KnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase"></a>

```csharp
public string UseS3KnowledgeBase { get; }
```

- *Type:* string

---

##### `UseSalesforceAction`<sup>Required</sup> <a name="UseSalesforceAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```csharp
public string UseSalesforceAction { get; }
```

- *Type:* string

---

##### `UseSandPGlobalEnergyAction`<sup>Required</sup> <a name="UseSandPGlobalEnergyAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```csharp
public string UseSandPGlobalEnergyAction { get; }
```

- *Type:* string

---

##### `UseSandPgmiAction`<sup>Required</sup> <a name="UseSandPgmiAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```csharp
public string UseSandPgmiAction { get; }
```

- *Type:* string

---

##### `UseSapBillOfMaterialAction`<sup>Required</sup> <a name="UseSapBillOfMaterialAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```csharp
public string UseSapBillOfMaterialAction { get; }
```

- *Type:* string

---

##### `UseSapBusinessPartnerAction`<sup>Required</sup> <a name="UseSapBusinessPartnerAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```csharp
public string UseSapBusinessPartnerAction { get; }
```

- *Type:* string

---

##### `UseSapMaterialStockAction`<sup>Required</sup> <a name="UseSapMaterialStockAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```csharp
public string UseSapMaterialStockAction { get; }
```

- *Type:* string

---

##### `UseSapPhysicalInventoryAction`<sup>Required</sup> <a name="UseSapPhysicalInventoryAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```csharp
public string UseSapPhysicalInventoryAction { get; }
```

- *Type:* string

---

##### `UseSapProductMasterDataAction`<sup>Required</sup> <a name="UseSapProductMasterDataAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```csharp
public string UseSapProductMasterDataAction { get; }
```

- *Type:* string

---

##### `UseServiceNowAction`<sup>Required</sup> <a name="UseServiceNowAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```csharp
public string UseServiceNowAction { get; }
```

- *Type:* string

---

##### `UseSharePointAction`<sup>Required</sup> <a name="UseSharePointAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```csharp
public string UseSharePointAction { get; }
```

- *Type:* string

---

##### `UseSharePointKnowledgeBase`<sup>Required</sup> <a name="UseSharePointKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase"></a>

```csharp
public string UseSharePointKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseSlackAction`<sup>Required</sup> <a name="UseSlackAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```csharp
public string UseSlackAction { get; }
```

- *Type:* string

---

##### `UseSmartsheetAction`<sup>Required</sup> <a name="UseSmartsheetAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```csharp
public string UseSmartsheetAction { get; }
```

- *Type:* string

---

##### `UseTextractAction`<sup>Required</sup> <a name="UseTextractAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```csharp
public string UseTextractAction { get; }
```

- *Type:* string

---

##### `UseWebCrawlerKnowledgeBase`<sup>Required</sup> <a name="UseWebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase"></a>

```csharp
public string UseWebCrawlerKnowledgeBase { get; }
```

- *Type:* string

---

##### `UseWordAddInExtension`<sup>Required</sup> <a name="UseWordAddInExtension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension"></a>

```csharp
public string UseWordAddInExtension { get; }
```

- *Type:* string

---

##### `UseZendeskAction`<sup>Required</sup> <a name="UseZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```csharp
public string UseZendeskAction { get; }
```

- *Type:* string

---

##### `ViewAccountSpiceCapacity`<sup>Required</sup> <a name="ViewAccountSpiceCapacity" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```csharp
public string ViewAccountSpiceCapacity { get; }
```

- *Type:* string

---

##### `WebCrawlerKnowledgeBase`<sup>Required</sup> <a name="WebCrawlerKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase"></a>

```csharp
public string WebCrawlerKnowledgeBase { get; }
```

- *Type:* string

---

##### `ZendeskAction`<sup>Required</sup> <a name="ZendeskAction" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```csharp
public string ZendeskAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a>

---


### DataAwsccQuicksightCustomPermissionsTagsList <a name="DataAwsccQuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get"></a>

```csharp
private DataAwsccQuicksightCustomPermissionsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightCustomPermissionsTagsOutputReference <a name="DataAwsccQuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightCustomPermissionsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightCustomPermissionsTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a>

---



