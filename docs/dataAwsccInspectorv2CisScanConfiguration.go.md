# `dataAwsccInspectorv2CisScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CisScanConfiguration <a name="DataAwsccInspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfiguration(scope Construct, id *string, config DataAwsccInspectorv2CisScanConfigurationConfig) DataAwsccInspectorv2CisScanConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccInspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccInspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName">ScanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName"></a>

```go
func ScanName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule"></a>

```go
func Schedule() DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets"></a>

```go
func Targets() DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CisScanConfigurationConfig <a name="DataAwsccInspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CisScanConfigurationSchedule <a name="DataAwsccInspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDaily <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeekly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly {

}
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime {

}
```


### DataAwsccInspectorv2CisScanConfigurationTargets <a name="DataAwsccInspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

&dataawsccinspectorv2cisscanconfiguration.DataAwsccInspectorv2CisScanConfigurationTargets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```go
func StartTime() DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleDaily
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```go
func StartTime() DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleMonthly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">OneTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```go
func Daily() DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```go
func Monthly() DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```go
func OneTime() *string
```

- *Type:* *string

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```go
func Weekly() DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">Days</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```go
func Days() *[]*string
```

- *Type:* *[]*string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```go
func StartTime() DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleWeekly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2cisscanconfiguration"

dataawsccinspectorv2cisscanconfiguration.NewDataAwsccInspectorv2CisScanConfigurationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">TargetResourceTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```go
func TargetResourceTags() StringListMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CisScanConfigurationTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a>

---



