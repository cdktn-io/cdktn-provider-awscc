# `dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations` Submodule <a name="`dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations awscc_route53resolver_resolver_query_logging_config_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations(Construct Scope, string Id, DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig">DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig">DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_resolver_query_logging_config_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig <a name="DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverResolverQueryLoggingConfigAssociations.DataAwsccRoute53ResolverResolverQueryLoggingConfigAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



